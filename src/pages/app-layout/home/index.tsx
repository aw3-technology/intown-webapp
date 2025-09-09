/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
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

export const Home = () => {
  const { messages, addMessage, clearMessages } = useChat();
  const assistantMessages = useAssistantMessages();

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
      setTimeout(() => {
        addMessage(userMessage);
      }, 500);
    }
  };

  const containerRef = useRef<HTMLDivElement>(null);

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
            className="flex-1 overflow-y-auto px-4 pt-4 pb-4"
          >
            <div className="max-w-[752px] mx-auto w-full">
              <ChatContainer messages={messages} containerRef={containerRef} />
            </div>
          </div>
          <div className="sticky bottom-0 bg-layout border-t border-border/50 px-4 py-4 pb-24 lg:pb-4">
            <div className="max-w-[752px] mx-auto w-full">
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
