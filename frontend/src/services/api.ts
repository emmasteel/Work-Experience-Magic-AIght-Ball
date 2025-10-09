const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

interface AskQuestionResponse {
  answer: string;
  timestamp: string;
  note?: string;
}

interface ErrorResponse {
  error: string;
  code: string;
}

export const apiService = {
  async askQuestion(question: string): Promise<AskQuestionResponse> {
    const response = await fetch(`${API_BASE_URL}/api/ask-question`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });

    if (!response.ok) {
      const errorData: ErrorResponse = await response.json();
      throw new Error(errorData.error || 'Failed to get answer');
    }

    return response.json();
  },

  async healthCheck() {
    const response = await fetch(`${API_BASE_URL}/api/health`);
    return response.json();
  },
};
