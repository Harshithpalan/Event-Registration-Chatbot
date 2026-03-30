export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface EventRegistration {
  name: string;
  email: string;
  phone: string;
  event: string;
  attendees: number;
  specialRequirements?: string;
}

export interface Event {
  id: string;
  name: string;
  date: string;
  location: string;
  description: string;
  maxAttendees: number;
  currentAttendees: number;
  price: number;
  category: string;
}

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export interface ChatStep {
  id: string;
  label: string;
  validator: (input: string) => ValidationResult;
  nextStep: string;
}

export type RegistrationStep = 'name' | 'email' | 'phone' | 'event' | 'attendees' | 'requirements' | 'confirmation' | 'completed';

export interface ChatState {
  messages: Message[];
  inputValue: string;
  isTyping: boolean;
  registrationData: Partial<EventRegistration>;
  currentStep: RegistrationStep;
}

export interface BotResponse {
  text: string;
  nextStep?: RegistrationStep;
  shouldUpdateData?: boolean;
  dataKey?: keyof EventRegistration;
}
