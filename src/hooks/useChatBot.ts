import { useState, useEffect, useRef } from 'react';
import { Message, EventRegistration, RegistrationStep, ChatState } from '../types';
import { generateBotResponse, createMessage, scrollToBottom } from '../utils/chatHelpers';
import { CHAT_CONFIG } from '../config/constants';

const initialState: ChatState = {
  messages: [
    {
      id: '1',
      text: "🎉 Hello! I'm your event registration assistant. I can help you register for our upcoming events. What's your name?",
      sender: 'bot',
      timestamp: new Date()
    }
  ],
  inputValue: '',
  isTyping: false,
  registrationData: {},
  currentStep: 'name'
};

export const useChatBot = () => {
  const [state, setState] = useState<ChatState>(initialState);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [state.messages]);

  const handleSendMessage = (inputValue: string) => {
    if (!inputValue.trim()) return;

    const userMessage = createMessage(inputValue, 'user');
    setState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      inputValue: '',
      isTyping: true
    }));

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = generateBotResponse(
        inputValue, 
        state.currentStep, 
        state.registrationData
      );
      
      const botMessage = createMessage(botResponse.text, 'bot');
      
      setState(prev => {
        const updatedData = botResponse.shouldUpdateData && botResponse.dataKey
          ? { ...prev.registrationData, [botResponse.dataKey]: inputValue }
          : prev.registrationData;

        return {
          ...prev,
          messages: [...prev.messages, botMessage],
          isTyping: false,
          registrationData: updatedData,
          currentStep: botResponse.nextStep || prev.currentStep
        };
      });
    }, CHAT_CONFIG.typingDelay);
  };

  const resetChat = () => {
    setState(initialState);
  };

  const setInputValue = (value: string) => {
    setState(prev => ({ ...prev, inputValue: value }));
  };

  return {
    ...state,
    messagesEndRef,
    handleSendMessage,
    resetChat,
    setInputValue
  };
};
