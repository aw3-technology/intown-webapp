import {
  ArrowUp,
  BabyIcon,
  BikeIcon,
  LightbulbIcon,
  Loader,
  Plus,
  SparklesIcon,
  TicketsPlane,
  WineIcon,
  X,
  MoreVertical,
  Home,
  Compass,
  Calendar,
  Heart,
  Mic,
  User,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { useRef, useState } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { cn } from '@/lib/utils';
import { ShineBorder } from "@/components/magicui/shine-border";
import { useLocation, useNavigate } from 'react-router';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

interface PromptInputAreaProps {
  showSuggestions?: boolean;
  onSubmit: (message: string, files: File[]) => Promise<void>;
  className?: string;
}

export const PromptInputArea = ({
  showSuggestions = true,
  className,
  onSubmit,
}: PromptInputAreaProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const [input, setInput] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const uploadInputRef = useRef<HTMLInputElement>(null);

  const suggestionPrompts = [
    {
      icon: <TicketsPlane className="text-foreground size-4" />,
      value: 'Create a new trip',
    },
    {
      icon: <LightbulbIcon className="text-foreground size-4" />,
      value: 'Get inspired',
    },
    {
      icon: <SparklesIcon className="text-foreground size-4" />,
      value: 'Inspire me where to go',
    },
    {
      icon: <BikeIcon className="text-foreground size-4" />,
      value: 'Solo trip',
    },
    {
      icon: <WineIcon className="text-foreground size-4" />,
      value: 'Partner',
    },
    {
      icon: <BabyIcon className="text-foreground size-4" />,
      value: 'Family',
    },
  ];

  const handleSubmit = async () => {
    if (input.trim() || files.length > 0) {
      setIsLoading(true);
      const messageToSend = input.trim();
      setInput(''); // Clear input immediately after capturing the value
      setFiles([]);
      await onSubmit(messageToSend, files);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    if (uploadInputRef?.current) {
      uploadInputRef.current.value = '';
    }
  };

  return (
    <div className={cn("flex flex-col gap-4 w-full", className)}>
      <div className="w-full rounded-xl bg-card relative overflow-hidden">
        <div className="relative rounded-xl">
          <ShineBorder duration={4} style={{opacity: 0.8}} shineColor={["#808080", "#A0A0A0", "#C0C0C0"]} />
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit();
              }
            }}
            style={{
              backgroundColor: 'transparent',
            }}
            className="flex field-sizing-content max-h-[200px] w-full rounded-xl px-4 py-3 leading-relaxed text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none [resize:none] shadow-none border-none focus-visible:ring-0"
            placeholder="Ask anything about LA"
            aria-label="Enter your prompt"
          />
          <div className="flex items-center justify-between gap-2 py-2 px-3 backdrop-blur-md bg-white/10 dark:bg-black/10 transition-colors">
            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <label
                    htmlFor="file-upload"
                    className="hover:bg-card-foreground/10 border border-input flex h-8 w-8 cursor-pointer items-center justify-center rounded-2xl"
                  >
                    <input
                      type="file"
                      multiple
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload"
                    />
                    <Plus className="size-3" />
                  </label>
                </TooltipTrigger>
                <TooltipContent showArrow>
                  <p className="text-xs">Attach files</p>
                </TooltipContent>
              </Tooltip>

              {/* Navigation menu button - only visible on mobile when on home page */}
              {isHomePage && (
                <div className="lg:hidden">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 border border-input rounded-2xl hover:bg-card-foreground/10"
                      >
                        <MoreVertical className="size-3" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      align="start" 
                      side="top" 
                      className="bg-card backdrop-blur-sm rounded-xl w-[200px] shadow-lg border-none"
                    >
                      <DropdownMenuItem 
                        className="p-0 transition-all overflow-hidden rounded-lg"
                        onClick={() => navigate('/')}
                      >
                        <span className="flex items-center px-3 py-2 gap-3 w-full cursor-pointer">
                          <Home className="w-4 h-4" />
                          Home
                        </span>
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        className="p-0 transition-all overflow-hidden rounded-lg"
                        onClick={() => navigate('/explore')}
                      >
                        <span className="flex items-center px-3 py-2 gap-3 w-full cursor-pointer">
                          <Compass className="w-4 h-4" />
                          Explore
                        </span>
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        className="p-0 transition-all overflow-hidden rounded-lg"
                        onClick={() => navigate('/my-bookings')}
                      >
                        <span className="flex items-center px-3 py-2 gap-3 w-full cursor-pointer">
                          <Calendar className="w-4 h-4" />
                          My Bookings
                        </span>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="p-0 transition-all overflow-hidden rounded-lg"
                        onClick={() => navigate('/saved')}
                      >
                        <span className="flex items-center px-3 py-2 gap-3 w-full cursor-pointer">
                          <Heart className="w-4 h-4" />
                          Saved
                        </span>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="p-0 transition-all overflow-hidden rounded-lg"
                        onClick={() => navigate('/profile')}
                      >
                        <span className="flex items-center px-3 py-2 gap-3 w-full cursor-pointer">
                          <User className="w-4 h-4" />
                          Profile
                        </span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              )}

              {files.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {files.map((file, index) => (
                    <Tooltip key={index}>
                      <TooltipTrigger asChild>
                        <div className="bg-secondary flex items-center gap-2 rounded-lg px-3 py-2 text-sm">
                          <span className="max-w-[120px] truncate">
                            {file.name}
                          </span>
                          <button
                            onClick={() => handleRemoveFile(index)}
                            className="hover:bg-secondary/50 rounded-full p-1"
                          >
                            <X className="size-4" />
                          </button>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent showArrow>
                        <p className="text-xs">{file.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="rounded-full size-8 cursor-pointer hover:bg-card-foreground/10"
                    onClick={() => {
                      // Voice input functionality will be implemented here
                      console.log('Voice input clicked');
                    }}
                    type="button"
                  >
                    <Mic className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent showArrow>
                  <p className="text-xs">Voice input</p>
                </TooltipContent>
              </Tooltip>
              <Button
                size="icon"
                className="rounded-full size-8 cursor-pointer"
                onClick={handleSubmit}
                type="submit"
              >
                {isLoading ? (
                  <Loader className="w-[7px] h-[7px] animate-[spin_4s_linear_infinite]" />
                ) : (
                  <ArrowUp className="w-[7px] h-[7px]" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
      {showSuggestions && (
        <div className="flex flex-wrap gap-2 items-center justify-center">
          {suggestionPrompts.map((prompt) => (
            <Button
              variant="outline"
              className="border border-input gap-2 px-5 font-normal cursor-pointer text-neutral-500"
              key={prompt.value}
              onClick={() => setInput(prompt.value)}
            >
              <div className="hidden md:block">{prompt.icon}</div>
              {prompt.value}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};
