# Event Registration Chatbot

A modern React-based web application that allows users to register for events through an intelligent conversational chatbot interface.

## 🚀 Features

### Interactive Chatbot
- **Natural conversation flow** for event registration
- **Real-time typing indicators** with animated dots
- **Input validation** at each step with helpful error messages
- **Modern chat UI** with user and bot avatars
- **Auto-scroll** to latest messages
- **Timestamp** for each message

### Registration Process
1. **Name Collection** - Personalized greeting and name capture
2. **Email Validation** - Regex-based email format validation
3. **Phone Number** - Contact number collection with validation
4. **Event Selection** - Choose from 5 available events
5. **Attendee Count** - Number of participants (1-10)
6. **Special Requirements** - Dietary restrictions or special needs
7. **Confirmation** - Review complete registration details
8. **Success Message** - Registration completion with email confirmation notice

### User Experience
- **Responsive design** - Works on desktop, tablet, and mobile
- **Keyboard support** - Enter to send, Shift+Enter for new line
- **Start Over button** - Reset conversation at any time
- **Disabled input** after successful registration
- **Smooth animations** and transitions
- **Professional UI** with modern design principles

## 🛠 Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS for modern, responsive design
- **Icons**: Lucide React for beautiful UI icons
- **Build Tool**: Create React App with TypeScript support
- **State Management**: React useState hooks
- **Form Validation**: Regular expressions and input validation

## 📁 Project Structure

```
046/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── ChatBot.tsx
│   ├── config/
│   │   └── constants.ts
│   ├── data/
│   │   └── events.ts
│   ├── hooks/
│   │   └── useChatBot.ts
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   ├── chatHelpers.ts
│   │   └── validation.ts
│   ├── App.tsx
│   ├── index.css
│   └── index.tsx
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 📦 Installation

1. Navigate to the project directory:
```bash
cd 046
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🎯 Usage Guide

### Starting a Conversation
1. Open the application in your browser
2. The chatbot will greet you automatically
3. Follow the conversation flow to register for an event

### Registration Steps
1. **Enter your name** - The bot will personalize the conversation
2. **Provide email** - Must be a valid email format
3. **Add phone number** - Minimum 10 digits required
4. **Select event** - Choose from numbered list or type event name
5. **Specify attendees** - Number between 1 and 10
6. **Special requirements** - Type 'none' if not applicable
7. **Confirm registration** - Review details and confirm or cancel

### Available Events
- 🚀 Tech Conference 2024
- 🤝 Startup Networking Night
- 🤖 AI Workshop
- 💻 Web Development Bootcamp
- 📈 Digital Marketing Summit

## 📊 Validation Rules

### Email Validation
- Format: `username@domain.com`
- Regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`

### Phone Validation
- Minimum 10 digits
- Accepts: numbers, spaces, hyphens, plus, parentheses
- Regex: `/^[\d\s\-+()]+$/`

### Attendee Count
- Range: 1-10 people
- Must be a valid number

## 🎨 UI Features

- **Chat bubbles** - Different colors for user and bot messages
- **Avatar icons** - User and bot representations
- **Typing indicator** - Animated dots when bot is "thinking"
- **Message timestamps** - Time display for each message
- **Responsive layout** - Adapts to different screen sizes
- **Modern styling** - Clean, professional design with Tailwind CSS
- **Smooth transitions** - CSS animations for better UX

## 🔧 Configuration

### Available Events
The events list can be easily modified in the `src/data/events.ts` file.

### Validation Rules
Update validation patterns in the `src/utils/validation.ts` file:
- Email regex pattern
- Phone number requirements
- Attendee count limits

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Cloud Platforms
The application can be deployed to any static hosting platform:
- **Vercel**: Zero-config deployment
- **Netlify**: Drag-and-drop deployment
- **AWS**: S3 + CloudFront
- **Azure**: Static Web Apps
- **GCP**: Cloud Storage

## 📚 Technical Implementation

### State Management
- `messages` - Array of chat messages with sender and timestamp
- `inputValue` - Current user input
- `isTyping` - Bot typing indicator state
- `registrationData` - Collected registration information
- `currentStep` - Current step in registration flow

### Conversation Flow
The chatbot uses a step-based approach:
1. Each step collects specific information
2. Validation occurs before proceeding to next step
3. Error messages guide users to correct input
4. Registration data is accumulated throughout the process

### Component Structure
- **ChatBot.tsx** - Main chatbot component
- **App.tsx** - Root application component
- **index.tsx** - React DOM entry point
- **index.css** - Global styles and Tailwind imports

## 🔍 Key Features

### Input Validation
- Real-time validation with helpful error messages
- Regex patterns for email and phone validation
- Numeric validation for attendee count
- Event selection validation

### User Experience
- Conversational interface feels natural
- Clear instructions at each step
- Progress indication through conversation flow
- Option to restart at any time

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Clear visual indicators
- Responsive design for all devices

## 🤝 Customization

### Adding New Events
1. Update the events array in `src/data/events.ts`
2. The chatbot will automatically include new events in the selection

### Modifying Validation
1. Update regex patterns in `src/utils/validation.ts`
2. Adjust validation logic as needed
3. Update error messages for better user guidance

### Styling Changes
1. Modify Tailwind classes in `src/components/ChatBot.tsx`
2. Update color scheme in CSS variables
3. Adjust responsive breakpoints if needed

## 📄 License

This project is provided for educational purposes. Please check the license file for usage terms.

---

**Built with ❤️ for modern web development**
