import { useState, useCallback } from 'react';
import type { MagicBallState } from '../types';
import { askMagicBall, handleApiError } from '../services/magicBallApi';

/**
 * 🎯 useMagicBall Hook
 * 
 * Custom hook for managing Magic 8 Ball state and interactions
 * Based on requirements from docs/architecture-design.md
 * 
 * Handles:
 * - Question submission and API calls
 * - Loading states
 * - Error handling
 * - State management
 */
export const useMagicBall = () => {
  const [state, setState] = useState<MagicBallState>({
    currentQuestion: '',
    currentAnswer: '',
    isLoading: false,
    hasError: false,
    errorMessage: ''
  });

  /**
   * Asks a question to the Magic 8 Ball
   * @param question - The user's question
   */
  const askQuestion = useCallback(async (question: string) => {
    // Clear previous state
    setState(prev => ({
      ...prev,
      currentQuestion: question,
      currentAnswer: '',
      isLoading: true,
      hasError: false,
      errorMessage: ''
    }));

    try {
      const response = await askMagicBall(question);
      
      setState(prev => ({
        ...prev,
        currentAnswer: response.answer,
        isLoading: false
      }));
      
    } catch (error) {
      const errorMessage = handleApiError(error);
      
      setState(prev => ({
        ...prev,
        isLoading: false,
        hasError: true,
        errorMessage
      }));
    }
  }, []);

  /**
   * Resets the Magic 8 Ball to initial state
   */
  const resetMagicBall = useCallback(() => {
    setState({
      currentQuestion: '',
      currentAnswer: '',
      isLoading: false,
      hasError: false,
      errorMessage: ''
    });
  }, []);

  /**
   * Clears any error state
   */
  const clearError = useCallback(() => {
    setState(prev => ({
      ...prev,
      hasError: false,
      errorMessage: ''
    }));
  }, []);

  return {
    // State
    question: state.currentQuestion,
    answer: state.currentAnswer,
    isLoading: state.isLoading,
    hasError: state.hasError,
    errorMessage: state.errorMessage,
    
    // Actions
    askQuestion,
    resetMagicBall,
    clearError
  };
};