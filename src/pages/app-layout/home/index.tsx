/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState, useCallback } from 'react';
import { PromptInputArea } from '@/components/custom/prompt-input-area';
import InTownLogo from '/intown-circle.svg?inline';
import { useChat } from '@/hooks/use-chat';
import {
  ChatContainer,
  Message as MessageType,
} from '@/components/custom/chat-container';
import { useAssistantMessages } from './hooks/use-assistant-message';
import { AllFlightsDrawer } from './partials/all-flights-drawer';
import { AllAccomodationDrawer } from './partials/all-accommodation-drawer';
import { TextAnimate } from "@/components/magicui/text-animate";  
import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export const Home = () => {
  const { messages, addMessage, clearMessages } = useChat();
  const assistantMessages = useAssistantMessages();
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    return () => {
      clearMessages();
    };
  }, []);

  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].role === 'user') {
      const timer = setTimeout(() => {
        assistantMessages.forEach((message) => addMessage(message));
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [messages, addMessage, assistantMessages]);

  const handleSubmit = async (message: string, files: File[]) => {
    if (message.trim() || files.length > 0) {
      const userMessage: MessageType = {
        id: messages.length + 1,
        role: 'user',
        content: message.trim(),
        files: files,
      };
      
      // Count how many user messages exist before adding this one
      const userMessageCount = messages.filter(m => m.role === 'user').length;
      
      addMessage(userMessage);
      
      // Only scroll to top for second+ prompts
      if (userMessageCount >= 1) {
        setTimeout(() => {
          if (containerRef.current) {
            const container = containerRef.current;
            const messageElements = container.querySelectorAll('[data-message-index]');
            const lastMessage = messageElements[messageElements.length - 1];
            
            if (lastMessage) {
              // Get the last message position relative to container
              const messageRect = lastMessage.getBoundingClientRect();
              const containerRect = container.getBoundingClientRect();
              
              // Calculate scroll position to put message at top of container (with 20px padding)
              const scrollTarget = container.scrollTop + (messageRect.top - containerRect.top) - 20;
              
              container.scrollTo({
                top: scrollTarget,
                behavior: 'smooth'
              });
            }
          }
        }, 100);
      }
    }
  };

  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, []);

  const checkScrollButton = useCallback(() => {
    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      const hasOverflow = scrollHeight > clientHeight;
      const isAtBottom = scrollHeight - scrollTop - clientHeight < 100;
      setShowScrollButton(hasOverflow && !isAtBottom);
    }
  }, []);

  useEffect(() => {
    // Check initially and on scroll
    checkScrollButton();
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButton);
      
      // Also check when content changes
      const resizeObserver = new ResizeObserver(checkScrollButton);
      resizeObserver.observe(container);
      
      // Watch for DOM changes in the chat container
      const mutationObserver = new MutationObserver(checkScrollButton);
      mutationObserver.observe(container, {
        childList: true,
        subtree: true,
        characterData: true
      });
      
      return () => {
        container.removeEventListener('scroll', checkScrollButton);
        resizeObserver.disconnect();
        mutationObserver.disconnect();
      };
    }
  }, [messages.length, checkScrollButton]);

  // Check after messages update and DOM renders
  useEffect(() => {
    // Use setTimeout to ensure DOM has updated
    const timer = setTimeout(() => {
      checkScrollButton();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [messages, checkScrollButton]);

  return (
    <div className="flex flex-col w-full h-svh relative">
      {messages?.length <= 0 ? (
        // Initial centered view
        <div className="flex flex-col w-full h-full items-center gap-7 justify-center pb-24 lg:pb-4">
          <BlurFade delay={0.25} inView>
            <img
              src={InTownLogo}
              alt="InTown Logo"
              className="w-[104px] -mb-6 object-cover antialiased"
            />
          </BlurFade>
          <div className="flex flex-col w-full items-center gap-2 pt-4 pb-7 text-center">
            <TextAnimate animation="blurInUp" delay={0.5} by="character" once as="h1" className='leading-8 font-normal'>
              Ready to explore Los Angeles?
            </TextAnimate>
          </div>
          <PromptInputArea
            onSubmit={handleSubmit}
            showSuggestions={true}
            className="max-w-[752px] w-full px-2"
          />
        </div>
      ) : (
        // Chat view with messages at top and input at bottom
        <>
          <div
            ref={containerRef}
            className="flex-1 overflow-y-auto px-4 pt-4 pb-4 overscroll-contain"
            style={{ WebkitOverflowScrolling: 'auto' }}
          >
            <div className="max-w-[752px] mx-auto w-full">
              <ChatContainer messages={messages} containerRef={containerRef} enableAutoScroll={false} />
            </div>
          </div>
          <div className="sticky bottom-0 bg-layout border-t border-border/50 px-4 py-4 pb-24 lg:pb-4">
            <div className="max-w-[752px] mx-auto w-full relative">
              {showScrollButton && (
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-10 opacity-70">
                  <Button
                    onClick={scrollToBottom}
                    size="icon"
                    className="rounded-full shadow-lg bg-background border border-border hover:bg-accent"
                  >
                    <ArrowDown className="h-4 w-4" />
                  </Button>
                </div>
              )}
              <PromptInputArea
                onSubmit={handleSubmit}
                showSuggestions={false}
                className="w-full"
              />
            </div>
          </div>
        </>
      )}
      <AllFlightsDrawer />
      <AllAccomodationDrawer />
    </div>
  );
};
