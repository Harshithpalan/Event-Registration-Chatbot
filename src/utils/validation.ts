import { ValidationResult } from '../types';

export const validateEmail = (email: string): ValidationResult => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!email.trim()) {
    return { isValid: false, error: 'Email is required' };
  }
  
  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }
  
  return { isValid: true };
};

export const validatePhone = (phone: string): ValidationResult => {
  const phoneRegex = /^[\d\s\-+()]+$/;
  const cleanPhone = phone.replace(/\D/g, '');
  
  if (!phone.trim()) {
    return { isValid: false, error: 'Phone number is required' };
  }
  
  if (!phoneRegex.test(phone)) {
    return { isValid: false, error: 'Phone number can only contain digits, spaces, and +()- characters' };
  }
  
  if (cleanPhone.length < 10) {
    return { isValid: false, error: 'Phone number must have at least 10 digits' };
  }
  
  return { isValid: true };
};

export const validateName = (name: string): ValidationResult => {
  if (!name.trim()) {
    return { isValid: false, error: 'Name is required' };
  }
  
  if (name.trim().length < 2) {
    return { isValid: false, error: 'Name must be at least 2 characters long' };
  }
  
  if (name.trim().length > 50) {
    return { isValid: false, error: 'Name must be less than 50 characters' };
  }
  
  if (!/^[a-zA-Z\s'-]+$/.test(name)) {
    return { isValid: false, error: 'Name can only contain letters, spaces, hyphens, and apostrophes' };
  }
  
  return { isValid: true };
};

export const validateAttendees = (attendees: string): ValidationResult => {
  const num = parseInt(attendees);
  
  if (!attendees.trim()) {
    return { isValid: false, error: 'Number of attendees is required' };
  }
  
  if (isNaN(num)) {
    return { isValid: false, error: 'Please enter a valid number' };
  }
  
  if (num < 1) {
    return { isValid: false, error: 'At least 1 attendee is required' };
  }
  
  if (num > 10) {
    return { isValid: false, error: 'Maximum 10 attendees allowed' };
  }
  
  return { isValid: true };
};

export const validateEventSelection = (input: string, availableEvents: string[]): ValidationResult => {
  if (!input.trim()) {
    return { isValid: false, error: 'Please select an event' };
  }
  
  const eventIndex = parseInt(input) - 1;
  const selectedEvent = eventIndex >= 0 && eventIndex < availableEvents.length 
    ? availableEvents[eventIndex] 
    : availableEvents.find(event => event.toLowerCase().includes(input.toLowerCase()));
  
  if (!selectedEvent) {
    return { isValid: false, error: 'Please select a valid event from the list' };
  }
  
  return { isValid: true };
};

export const validateSpecialRequirements = (requirements: string): ValidationResult => {
  if (requirements.length > 500) {
    return { isValid: false, error: 'Special requirements must be less than 500 characters' };
  }
  
  return { isValid: true };
};

export const validateConfirmation = (input: string): ValidationResult => {
  const normalizedInput = input.toLowerCase().trim();
  
  if (normalizedInput !== 'confirm' && normalizedInput !== 'cancel') {
    return { isValid: false, error: 'Please type "confirm" to complete registration or "cancel" to start over' };
  }
  
  return { isValid: true };
};
