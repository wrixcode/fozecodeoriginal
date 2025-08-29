'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Mic, MicOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Minimal SpeechRecognition types
interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
  resultIndex: number;
}

interface SpeechRecognitionResult {
  readonly length: number;
  item(index: number): SpeechRecognitionAlternative;
  [index: number]: SpeechRecognitionAlternative;
}

interface SpeechRecognitionResultList {
  readonly length: number;
  item(index: number): SpeechRecognitionResult;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionAlternative {
  readonly transcript: string;
  readonly confidence: number;
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  maxAlternatives: number;
  serviceURI: string;

  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: Event & { error?: string }) => void) | null;
  onend: (() => void) | null;
  onstart: (() => void) | null;
  onspeechend: (() => void) | null;
  onspeechstart: (() => void) | null;
  onsoundstart: (() => void) | null;
  onsoundend: (() => void) | null;
  onaudiostart: (() => void) | null;
  onaudioend: (() => void) | null;
  onnomatch: ((event: SpeechRecognitionEvent) => void) | null;

  start(): void;
  stop(): void;
  abort(): void;
}

interface SpeechRecognitionConstructor {
  new (): SpeechRecognition;
}

declare global {
  interface Window {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  }
}

const SpeechRecognitionConstructor: SpeechRecognitionConstructor | undefined =
  typeof window !== 'undefined'
    ? (window.SpeechRecognition || window.webkitSpeechRecognition)
    : undefined;

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const predefinedQA: { question: string; answer: string }[] = [
  // ... same questions as before ...
  { question: 'what services do you offer', answer: 'We offer web development, creative web design, ecommerce solutions, and performance optimization.' },
  { question: 'how can i contact fozecode', answer: 'You can contact us via email at fozecode@gmail.com or call us at +91 8129780845.' },
  { question: 'tell me about your projects', answer: 'We have worked on business websites, social media dashboards, healthcare portals, and more.' },
  { question: 'do you provide ecommerce solutions', answer: 'Yes, we build seamless and secure ecommerce websites optimized for conversions.' },
  { question: 'what technologies do you use', answer: 'We use Next.js, React, Tailwind CSS, TypeScript, Node.js, and Express among others.' },
  { question: 'how do i schedule a consultation', answer: 'You can schedule a free consultation by contacting us through the contact page or email.' },
  { question: 'what is your experience', answer: 'We have over 2 years of experience delivering quality digital solutions to our clients.' },
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      text:
        "Hello! I'm Foze Assistant, your guide to Fozecode's web development solutions. How can I help you today? Feel free to ask about our services, portfolio, or schedule a free consultation.",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (!SpeechRecognitionConstructor) return;

    recognitionRef.current = new SpeechRecognitionConstructor();
    recognitionRef.current.continuous = false;
    recognitionRef.current.lang = 'en-US';

    recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript.toLowerCase().trim();
      setInput(transcript);
      setIsListening(false);
      if (inputRef.current) inputRef.current.focus();

      handleAutoAnswer(transcript);
    };

    recognitionRef.current.onerror = (event: Event & { error?: string }) => {
      console.error('Speech recognition error', event.error);
      setIsListening(false);
    };

    recognitionRef.current.onend = () => {
      setIsListening(false);
    };
  }, []);

  const toggleChat = () => setIsOpen(!isOpen);

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert('Speech recognition not supported by this browser.');
      return;
    }
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

  const handleAutoAnswer = async (transcript: string) => {
    const matchedQA = predefinedQA.find(({ question }) => transcript.includes(question));

    setMessages((prev) => [...prev, { text: transcript, isUser: true, timestamp: new Date() }]);
    setInput('');
    setIsLoading(true);

    if (matchedQA) {
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: matchedQA.answer, isUser: false, timestamp: new Date() }]);
        setIsLoading(false);
      }, 800);
    } else {
      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: transcript }),
        });
        if (!response.ok) throw new Error('Failed to get response');
        const data = await response.json();
        setMessages((prev) => [...prev, { text: data.response, isUser: false, timestamp: new Date() }]);
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            text: "Sorry, I'm having trouble connecting. Please try again later.",
            isUser: false,
            timestamp: new Date(),
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleAutoAnswer(input.trim().toLowerCase());
  };

  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-5 right-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full p-4 shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all z-50"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-20 right-4 sm:right-6 bg-[#141a2b] rounded-lg shadow-2xl border border-cyan-400 flex flex-col w-full max-w-[300px] sm:w-96 h-[500px] max-h-[80vh] z-50"
          >
            <div className="flex justify-between items-center p-4 border-b border-cyan-600 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-t-lg text-white font-semibold">
              <h3>Fozecode Assistant</h3>
              <button
                onClick={toggleChat}
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto custom-scrollbar">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 whitespace-pre-wrap ${
                      message.isUser
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-br-none'
                        : 'bg-gray-800 text-gray-300 rounded-bl-none'
                    }`}
                  >
                    <p>{message.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.isUser ? 'text-cyan-200' : 'text-gray-400'
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start mb-4">
                  <div className="bg-gray-800 text-gray-300 rounded-lg rounded-bl-none p-3">
                    <div className="flex space-x-2 animate-pulse">
                      <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="border-t border-cyan-600 p-2 flex items-center gap-1 w-full">
              <button
                type="button"
                onClick={toggleListening}
                aria-label={isListening ? 'Stop voice input' : 'Start voice input'}
                className={`mr-2 p-2 rounded-full ${
                  isListening
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'bg-cyan-600 text-white hover:bg-cyan-700'
                } transition-colors`}
              >
                {isListening ? <MicOff size={20} /> : <Mic size={20} />}
              </button>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Ask about our services..."
                className="min-w-0 flex-1 p-2 border border-cyan-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-[#1f2740] text-white text-sm"
                disabled={isLoading}
                autoComplete="off"
                style={{ cursor: 'text' }}
              />
              <button
                type="submit"
                className="flex-shrink-0 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-2 rounded-r-lg hover:from-cyan-600 hover:to-blue-700 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center w-10 h-10 transition-colors"
                disabled={isLoading || !input.trim()}
              >
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(56, 189, 248, 0.6);
          border-radius: 4px;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(56, 189, 248, 0.6) transparent;
        }
      `}</style>
    </>
  );
};

export default Chatbot;
