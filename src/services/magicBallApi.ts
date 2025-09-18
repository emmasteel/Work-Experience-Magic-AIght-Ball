import type { ApiResponse } from '../types';

/**
 * 🔮 Magic 8 Ball API Service
 * 
 * Handles communication with the AI backend service
 * Based on requirements from docs/integration-requirements.md
 * 
 * For now, this provides mock responses until the backend is implemented
 */

// Mock Magic 8 Ball responses with mystical flair
const mockResponses = [
  "Signs point to yes ✨",
  "Ask again later 🌙",
  "Don't count on it 💫",
  "Yes definitely ⭐",
  "My reply is no 🔮",
  "The stars align in your favour ✨",
  "Outlook not so good 🌩️",
  "Fortune favours the bold 💫",
  "Most likely 🌟",
  "Cannot predict now 🌊",
  "The universe says yes 🌌",
  "Very doubtful 🌫️",
  "Without a doubt ⚡",
  "Better not tell you now 🤫",
  "Yes, in due time ⏰",
  "The answer lies within you 💎",
  "Concentrate and ask again 🧘",
  "The path is unclear 🌫️",
  "All signs point to success 🎯",
  "The future is bright ☀️"
];

/**
 * Simulates API call to ask a question to the Magic 8 Ball
 * @param question - The user's question (currently unused in mock implementation)
 * @returns Promise with API response or error
 */
export const askMagicBall = async (question: string): Promise<ApiResponse> => {
  // Note: Currently using mock responses - will be replaced with actual AI integration
  console.log('Question asked:', question);
  
  // Simulate network delay
  const delay = Math.random() * 2000 + 1000; // 1-3 seconds
  await new Promise(resolve => setTimeout(resolve, delay));
  
  // Simulate occasional API errors (5% chance)
  if (Math.random() < 0.05) {
    throw new Error('The Magic 8 Ball is feeling dizzy. Please try again! 🌀');
  }
  
  // Select random response
  const randomIndex = Math.floor(Math.random() * mockResponses.length);
  const answer = mockResponses[randomIndex];
  
  return {
    answer,
    confidence: 'mystical',
    timestamp: new Date().toISOString(),
    responseTime: `${(delay / 1000).toFixed(1)}s`
  };
};

/**
 * Health check for the magic service
 * @returns Promise with service status
 */
export const checkMagicBallHealth = async (): Promise<{ status: string; message: string }> => {
  // Simulate health check delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return {
    status: 'healthy',
    message: 'The Magic 8 Ball is ready to reveal your fortune! ✨'
  };
};

/**
 * Error handler for API calls
 * @param error - The error object
 * @returns User-friendly error message
 */
export const handleApiError = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  
  return 'Oops! The Magic 8 Ball seems to be taking a mystical break. Please try again! 🔮';
};