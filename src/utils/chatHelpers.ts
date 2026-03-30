import { Message, EventRegistration, BotResponse, RegistrationStep } from '../types';
import { 
  validateName, 
  validateEmail, 
  validatePhone, 
  validateAttendees, 
  validateEventSelection, 
  validateSpecialRequirements, 
  validateConfirmation 
} from './validation';
import { availableEvents, formatEventList } from '../data/events';

export const generateBotResponse = (
  userInput: string, 
  step: RegistrationStep, 
  registrationData: Partial<EventRegistration>
): BotResponse => {
  const input = userInput.toLowerCase().trim();
  
  switch (step) {
    case 'name': {
      const validation = validateName(userInput);
      if (!validation.isValid) {
        return { text: validation.error! };
      }
      return { 
        text: `✨ Nice to meet you, ${userInput}! What's your email address?`,
        nextStep: 'email',
        shouldUpdateData: true,
        dataKey: 'name'
      };
    }
    
    case 'email': {
      const validation = validateEmail(userInput);
      if (!validation.isValid) {
        return { text: validation.error! };
      }
      return { 
        text: "📧 Great! What's your phone number?",
        nextStep: 'phone',
        shouldUpdateData: true,
        dataKey: 'email'
      };
    }
    
    case 'phone': {
      const validation = validatePhone(userInput);
      if (!validation.isValid) {
        return { text: validation.error! };
      }
      return { 
        text: `🎯 Perfect! Here are our upcoming events:\n\n${formatEventList(availableEvents)}\n\nWhich event would you like to register for? (Please enter the number or event name)`,
        nextStep: 'event',
        shouldUpdateData: true,
        dataKey: 'phone'
      };
    }
    
    case 'event': {
      const validation = validateEventSelection(userInput, availableEvents.map(e => e.name));
      if (!validation.isValid) {
        return { text: validation.error! };
      }
      
      const eventIndex = parseInt(input) - 1;
      const selectedEvent = eventIndex >= 0 && eventIndex < availableEvents.length 
        ? availableEvents[eventIndex].name 
        : availableEvents.find(event => event.name.toLowerCase().includes(input))?.name;
      
      return { 
        text: `🎊 Excellent choice! How many people will be attending (including yourself)?`,
        nextStep: 'attendees',
        shouldUpdateData: true,
        dataKey: 'event'
      };
    }
    
    case 'attendees': {
      const validation = validateAttendees(userInput);
      if (!validation.isValid) {
        return { text: validation.error! };
      }
      return { 
        text: "📝 Almost done! Do you have any special requirements or dietary restrictions? (Type 'none' if not)",
        nextStep: 'requirements',
        shouldUpdateData: true,
        dataKey: 'attendees'
      };
    }
    
    case 'requirements': {
      const validation = validateSpecialRequirements(userInput);
      if (!validation.isValid) {
        return { text: validation.error! };
      }
      
      const summary = generateRegistrationSummary(registrationData, userInput);
      return { 
        text: `📋 Thank you! Let me confirm your registration details:\n\n${summary}\n\nType 'confirm' to complete your registration or 'cancel' to start over.`,
        nextStep: 'confirmation',
        shouldUpdateData: true,
        dataKey: 'specialRequirements'
      };
    }
    
    case 'confirmation': {
      const validation = validateConfirmation(userInput);
      if (!validation.isValid) {
        return { text: validation.error! };
      }
      
      if (input === 'confirm') {
        return { 
          text: "🎉 Registration successful! You'll receive a confirmation email shortly. Thank you for registering!",
          nextStep: 'completed'
        };
      } else if (input === 'cancel') {
        return { 
          text: "Registration cancelled. Let's start over. What's your name?",
          nextStep: 'name'
        };
      }
      
      return { text: "Please type 'confirm' to complete your registration or 'cancel' to start over." };
    }
    
    default:
      return { 
        text: "🎉 I'm here to help you register for events. Let's start with your name.",
        nextStep: 'name'
      };
  }
};

export const generateRegistrationSummary = (
  data: Partial<EventRegistration>, 
  requirements: string
): string => {
  return `Name: ${data.name}\n` +
    `Email: ${data.email}\n` +
    `Phone: ${data.phone}\n` +
    `Event: ${data.event}\n` +
    `Attendees: ${data.attendees}\n` +
    `Special Requirements: ${requirements === 'none' ? 'None' : requirements}`;
};

export const createMessage = (
  text: string, 
  sender: 'user' | 'bot'
): Message => {
  return {
    id: Date.now().toString(),
    text,
    sender,
    timestamp: new Date()
  };
};

export const scrollToBottom = (elementRef: React.RefObject<HTMLDivElement>) => {
  elementRef.current?.scrollIntoView({ behavior: "smooth" });
};

export const formatTimestamp = (date: Date): string => {
  return date.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  });
};

export const isRegistrationComplete = (data: Partial<EventRegistration>): boolean => {
  return !!(
    data.name &&
    data.email &&
    data.phone &&
    data.event &&
    data.attendees
  );
};
