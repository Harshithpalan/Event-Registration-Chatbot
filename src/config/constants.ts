export const APP_CONFIG = {
  name: 'Event Registration Chatbot',
  version: '1.0.0',
  description: 'Register for events through an intelligent conversational interface',
  author: 'Event Registration Team',
  website: 'https://example.com'
};

export const CHAT_CONFIG = {
  typingDelay: 1000,
  scrollDelay: 100,
  maxMessageLength: 500,
  maxSpecialRequirementsLength: 500,
  maxAttendees: 10,
  minAttendees: 1,
  maxNameLength: 50,
  minNameLength: 2
};

export const VALIDATION_CONFIG = {
  emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phoneRegex: /^[\d\s\-+()]+$/,
  nameRegex: /^[a-zA-Z\s'-]+$/,
  minPhoneDigits: 10
};

export const UI_CONFIG = {
  colors: {
    primary: '#2563eb',
    primaryHover: '#1d4ed8',
    secondary: '#64748b',
    success: '#16a34a',
    error: '#dc2626',
    warning: '#f59e0b'
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  },
  animations: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms'
    }
  }
};

export const API_CONFIG = {
  timeout: 10000,
  retryAttempts: 3,
  retryDelay: 1000
};

export const REGISTRATION_CONFIG = {
  confirmationKeywords: ['confirm', 'yes', 'proceed'],
  cancellationKeywords: ['cancel', 'no', 'start over'],
  noneKeywords: ['none', 'no', 'n/a', 'not applicable']
};
