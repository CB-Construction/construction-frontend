// ChatBot Configuration
// Update these settings to connect your AI API

export const chatBotConfig = {
  // API Configuration
  api: {
    // Google Gemini API endpoint
    url: import.meta.env.VITE_CHATBOT_API_URL || 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent',
    
    // Add your Google Gemini API key here or in .env file
    // For now, we'll use mock responses if no key is provided
    key: import.meta.env.VITE_CHATBOT_API_KEY || '',
    
    // AI model configuration for Gemini
    model: 'gemini-1.5-flash-latest',
    maxTokens: 150,
    temperature: 0.7,
  },

  // Bot Appearance & Behavior
  bot: {
    name: 'CB Assistant',
    welcomeMessage: 'Hello! I\'m CB Assistant, your construction AI helper. How can I assist you today?',
    placeholder: 'Ask me about our services, projects, or anything construction-related...',
    
    // Theme colors (will respect dark/light mode)
    colors: {
      primary: 'from-cyan-500 to-purple-500',
      secondary: 'from-purple-500 to-cyan-500',
    },
  },

  // Features
  features: {
    typing: true,          // Show typing indicator
    timestamps: true,      // Show message timestamps
    minimizable: true,     // Allow minimizing chat window
    persistent: false,     // Remember conversation on page reload
  },
};

// Environment check
export const isApiConfigured = () => {
  return Boolean(chatBotConfig.api.key);
};

// Instructions for setting up your AI API
export const setupInstructions = `
To connect your AI API:

1. For Google Gemini API:
   - Get API key from: https://makersuite.google.com/app/apikey
   - Add to .env file: VITE_CHATBOT_API_KEY=your_gemini_key_here
   
2. For OpenAI GPT:
   - Get API key from: https://platform.openai.com/api-keys
   - Update the API URL to OpenAI endpoint in this file
   - Add to .env file: VITE_CHATBOT_API_KEY=your_openai_key_here
   
3. For other AI APIs:
   - Update the API URL in this file
   - Modify the request format in chatBotService.ts
   - Update the response parsing logic

4. For custom AI backend:
   - Update the entire sendMessage method in chatBotService.ts
   - Ensure your API accepts POST requests with message content
   - Return plain text response or update parsing logic

Current Status: ${isApiConfigured() ? 'API Key Configured ✅' : 'Using Mock Responses (No API Key) ⚠️'}
`;

export default chatBotConfig;
