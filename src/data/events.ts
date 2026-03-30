import { Event } from '../types';

export const availableEvents: Event[] = [
  {
    id: '1',
    name: '🚀 Tech Conference 2024',
    date: '2024-04-15',
    location: 'San Francisco Convention Center',
    description: 'Annual technology conference featuring the latest innovations in AI, cloud computing, and software development.',
    maxAttendees: 500,
    currentAttendees: 342,
    price: 299,
    category: 'Technology'
  },
  {
    id: '2',
    name: '🤝 Startup Networking Night',
    date: '2024-03-28',
    location: 'New York Tech Hub',
    description: 'Connect with fellow entrepreneurs, investors, and startup enthusiasts in a casual networking environment.',
    maxAttendees: 150,
    currentAttendees: 98,
    price: 25,
    category: 'Networking'
  },
  {
    id: '3',
    name: '🤖 AI Workshop',
    date: '2024-04-02',
    location: 'Seattle Innovation Center',
    description: 'Hands-on workshop covering machine learning fundamentals, neural networks, and practical AI applications.',
    maxAttendees: 50,
    currentAttendees: 47,
    price: 199,
    category: 'Workshop'
  },
  {
    id: '4',
    name: '💻 Web Development Bootcamp',
    date: '2024-05-10',
    location: 'Austin Digital Campus',
    description: 'Intensive 3-day bootcamp covering modern web development technologies including React, Node.js, and cloud deployment.',
    maxAttendees: 30,
    currentAttendees: 22,
    price: 599,
    category: 'Education'
  },
  {
    id: '5',
    name: '📈 Digital Marketing Summit',
    date: '2024-04-20',
    location: 'Los Angeles Business Center',
    description: 'Learn the latest digital marketing strategies, SEO techniques, and social media best practices from industry experts.',
    maxAttendees: 200,
    currentAttendees: 156,
    price: 149,
    category: 'Marketing'
  }
];

export const getEventById = (id: string): Event | undefined => {
  return availableEvents.find(event => event.id === id);
};

export const getEventByName = (name: string): Event | undefined => {
  return availableEvents.find(event => 
    event.name.toLowerCase().includes(name.toLowerCase())
  );
};

export const getAvailableEvents = (): Event[] => {
  return availableEvents.filter(event => event.currentAttendees < event.maxAttendees);
};

export const formatEventList = (events: Event[]): string => {
  return events.map((event, index) => {
    const spotsLeft = event.maxAttendees - event.currentAttendees;
    return `${index + 1}. ${event.name} - ${event.date} (${spotsLeft} spots left) - $${event.price}`;
  }).join('\n');
};
