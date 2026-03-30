import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Calendar, MapPin, Users, Clock, CheckCircle, Sparkles, Zap } from 'lucide-react';
import { useChatBot } from '../hooks/useChatBot';
import { Message } from '../types';

const ChatBot: React.FC = () => {
  const {
    messages,
    inputValue,
    isTyping,
    registrationData,
    currentStep,
    messagesEndRef,
    handleSendMessage,
    resetChat,
    setInputValue
  } = useChatBot();

  const [glowEffect, setGlowEffect] = useState(false);

  useEffect(() => {
    // Add glow effect periodically
    const interval = setInterval(() => {
      setGlowEffect(true);
      setTimeout(() => setGlowEffect(false), 2000);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputValue);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className={`bg-white shadow-lg border-b border-gray-200 px-6 py-4 transition-all duration-500 ${
        glowEffect ? 'shadow-blue-500/50 shadow-2xl' : ''
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-3 transition-all duration-300 hover:scale-110 ${
              glowEffect ? 'animate-pulse' : ''
            }`}>
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Event Registration Chat
              </h1>
              <p className="text-sm text-gray-500">Register for upcoming events ✨</p>
            </div>
          </div>
          <button
            onClick={resetChat}
            className="px-4 py-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Start Over
          </button>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 custom-scrollbar">
        {messages.map((message, index) => (
          <div
            key={message.id}
            className={`flex items-start space-x-3 ${message.sender === 'user' ? 'justify-end' : ''} animate-fadeIn`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {message.sender === 'bot' && (
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-full p-2 flex-shrink-0 shadow-md animate-bounce-in">
                <Bot className="h-5 w-5 text-blue-600" />
              </div>
            )}
            <div
              className={`max-w-md px-4 py-3 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 ${
                message.sender === 'user'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-blue-500/30'
                  : 'bg-white border border-gray-200 text-gray-900 shadow-gray-300/30'
              }`}
            >
              <p className="whitespace-pre-line break-words">{message.text}</p>
              <p className={`text-xs mt-1 ${
                message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
              }`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
            {message.sender === 'user' && (
              <div className="bg-gradient-to-r from-gray-200 to-gray-300 rounded-full p-2 flex-shrink-0 shadow-md animate-bounce-in">
                <User className="h-5 w-5 text-gray-600" />
              </div>
            )}
          </div>
        ))}
        
        {isTyping && (
          <div className="flex items-start space-x-3 animate-fadeIn">
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-full p-2 flex-shrink-0 shadow-md animate-pulse">
              <Bot className="h-5 w-5 text-blue-600" />
            </div>
            <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl shadow-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 px-6 py-4 shadow-2xl">
        <div className="flex items-center space-x-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message... ✨"
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 shadow-sm focus:shadow-md"
              disabled={currentStep === 'completed'}
            />
            {inputValue && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Sparkles className="h-4 w-4 text-yellow-500 animate-pulse" />
              </div>
            )}
          </div>
          <button
            onClick={() => handleSendMessage(inputValue)}
            disabled={!inputValue.trim() || isTyping || currentStep === 'completed'}
            className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-2xl hover:from-blue-700 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:shadow-none flex items-center justify-center`}
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
        {currentStep === 'completed' && (
          <div className="mt-3 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm">
              <CheckCircle className="h-4 w-4 mr-2" />
              Registration Complete! 🎉
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBot;
