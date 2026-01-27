'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { geminiService } from '@/services/gemini';
import './ChatWidget.css';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      text: "Bonjour! I'm your virtual concierge for DucknGood. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const responseText = await geminiService.sendMessage(userMessage.text);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat error:', error);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {isOpen && (
        <div className="mb-4 w-[350px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[70vh] bg-dark-800 border border-gray-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slide-up origin-bottom-right">
          
          <div className="bg-brand-500 p-4 flex justify-between items-center text-dark-900">
            <div className="flex items-center gap-2">
              <Bot size={20} className="font-bold" />
              <span className="font-bold font-serif">DucknGood Concierge</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-brand-600/20 p-1 rounded-full transition-colors"
              aria-label="Close Chat"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-dark-900/50">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex gap-2 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.sender === 'user' ? 'bg-gray-700' : 'bg-brand-500/20 text-brand-500'
                }`}>
                  {msg.sender === 'user' ? <User size={14} /> : <Bot size={16} />}
                </div>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.sender === 'user' 
                    ? 'bg-brand-500 text-dark-900 rounded-tr-none font-medium' 
                    : 'bg-dark-800 border border-gray-700 text-gray-200 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-500/20 text-brand-500 flex items-center justify-center flex-shrink-0">
                  <Bot size={16} />
                </div>
                <div className="bg-dark-800 border border-gray-700 p-3 rounded-2xl rounded-tl-none flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="p-3 bg-dark-800 border-t border-gray-700 flex gap-2">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about our menu..."
              className="flex-1 bg-dark-900 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 placeholder-gray-500"
            />
            <button 
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className="bg-brand-500 text-dark-900 p-2.5 rounded-xl hover:bg-brand-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-bold"
            >
              {isTyping ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
            </button>
          </form>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? 'bg-dark-800 text-gray-400 border border-gray-700 rotate-90' 
            : 'bg-brand-500 text-dark-900 hover:scale-110'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} className="fill-current" />}
      </button>
    </div>
  );
}
