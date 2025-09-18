import MagicBall from './components/MagicBall';
import QuestionInput from './components/QuestionInput';
import { useMagicBall } from './hooks/useMagicBall';
import './App.css';

/**
 * 🎱 Magic AIght Ball Application
 * 
 * Main application component that orchestrates the Magic 8 Ball experience
 * Based on requirements from docs/architecture-design.md and docs/frontend-requirements.md
 * 
 * Features:
 * - AI-powered mystical responses
 * - Responsive mobile-first design
 * - Accessibility features
 * - Error handling with user-friendly messages
 * - Loading states and animations
 */
function App() {
  const {
    question,
    answer,
    isLoading,
    hasError,
    errorMessage,
    askQuestion,
    clearError
  } = useMagicBall();

  const handleQuestionSubmit = (newQuestion: string) => {
    clearError();
    askQuestion(newQuestion);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">
          <span className="title-emoji">🎱</span>
          Magic AIght Ball
          <span className="title-emoji">✨</span>
        </h1>
        <p className="app-subtitle">
          Discover your fortune with AI-powered mystical wisdom
        </p>
      </header>

      <main className="app-main">
        <div className="magic-ball-section">
          <MagicBall 
            question={question}
            answer={hasError ? '' : answer}
            isLoading={isLoading}
          />
        </div>

        {hasError && (
          <div className="error-container" role="alert" aria-live="polite">
            <div className="error-message">
              <span className="error-emoji">⚠️</span>
              {errorMessage}
            </div>
            <button 
              className="error-retry-button"
              onClick={clearError}
              aria-label="Dismiss error message"
            >
              Try Again ✨
            </button>
          </div>
        )}

        <div className="question-input-section">
          <QuestionInput 
            onSubmit={handleQuestionSubmit}
            isDisabled={isLoading}
          />
        </div>
      </main>

      <footer className="app-footer">
        <p className="footer-text">
          <span className="footer-emoji">🌟</span>
          Built with magic and AI during Microsoft Work Experience
          <span className="footer-emoji">🚀</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
