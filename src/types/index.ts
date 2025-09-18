// 🔮 Type definitions for the Magic AIght Ball application
// Based on requirements from docs/architecture-design.md and docs/frontend-requirements.md

export interface MagicBallProps {
  question: string;
  answer: string;
  isLoading: boolean;
}

export interface QuestionInputProps {
  onSubmit: (question: string) => void;
  isDisabled: boolean;
  placeholder?: string;
}

export interface MagicBallState {
  currentQuestion: string;
  currentAnswer: string;
  isLoading: boolean;
  hasError: boolean;
  errorMessage: string;
}

export interface ApiResponse {
  answer: string;
  confidence?: string;
  timestamp?: string;
  responseTime?: string;
}

export interface ApiError {
  error: string;
  message: string;
  code?: string;
}