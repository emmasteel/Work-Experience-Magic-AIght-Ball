/**
 * Shared TypeScript types for Magic AIght Ball
 * These types are used across frontend and backend
 * Implements: docs/requirements/README.md#technical-requirements
 */

// 🎱 Magic Ball Prediction Types
export interface PredictionRequest {
  /** User's question for the magic ball */
  question: string;
  /** Optional session identifier for tracking */
  sessionId?: string;
}

export interface PredictionResponse {
  /** Whether the request was successful */
  success: boolean;
  /** AI-generated prediction text */
  prediction?: string;
  /** When the prediction was generated */
  timestamp: string;
  /** Session identifier */
  sessionId: string;
  /** Error details if request failed */
  error?: string;
  /** Error code for programmatic handling */
  code?: string;
}

// 🌡️ Health Check Types
export interface HealthResponse {
  /** Service status */
  status: 'healthy' | 'unhealthy';
  /** Current timestamp */
  timestamp: string;
  /** Application version */
  version: string;
  /** Additional service info */
  services?: {
    database?: 'connected' | 'disconnected';
    ai?: 'available' | 'unavailable';
  };
}

// 🚦 Rate Limiting Types
export interface RateLimitInfo {
  /** Maximum requests allowed */
  limit: number;
  /** Requests remaining in current window */
  remaining: number;
  /** When the limit resets (Unix timestamp) */
  reset: number;
}

// 📊 Analytics Types (for future use)
export interface AnalyticsEvent {
  /** Event type */
  event: 'question_asked' | 'prediction_generated' | 'error_occurred';
  /** Anonymous session identifier */
  sessionId: string;
  /** Event timestamp */
  timestamp: string;
  /** Additional event data */
  data?: Record<string, any>;
}

// 🎨 UI State Types
export interface MagicBallState {
  /** Current question text */
  question: string;
  /** Loading state */
  isLoading: boolean;
  /** Current prediction */
  prediction: string | null;
  /** Error message if any */
  error: string | null;
  /** Animation state */
  isShaking: boolean;
}

// 🔧 Configuration Types
export interface AppConfig {
  /** API base URL */
  apiBaseUrl: string;
  /** Azure OpenAI configuration */
  azureOpenAI: {
    endpoint: string;
    deploymentName: string;
  };
  /** Rate limiting configuration */
  rateLimit: {
    windowMs: number;
    maxRequests: number;
  };
}

// 🛡️ Error Types
export type ErrorCode = 
  | 'VALIDATION_ERROR'
  | 'RATE_LIMIT_EXCEEDED' 
  | 'AI_SERVICE_UNAVAILABLE'
  | 'INTERNAL_ERROR'
  | 'QUESTION_TOO_LONG'
  | 'QUESTION_EMPTY'
  | 'INAPPROPRIATE_CONTENT';

export interface ApiError {
  success: false;
  error: string;
  code: ErrorCode;
  timestamp: string;
}