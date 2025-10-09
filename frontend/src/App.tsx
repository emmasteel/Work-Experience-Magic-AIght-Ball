import { useState } from 'react';
import MagicBall from './components/MagicBall';
import QuestionInput from './components/QuestionInput';
import { apiService } from './services/api';
import './App.css';

function App() {
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAskQuestion = async (question: string) => {
    setIsLoading(true);
    setError('');
    
    try {
      const response = await apiService.askQuestion(question);
      setAnswer(response.answer);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to get answer';
      setError(errorMessage);
      setAnswer('');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎱 Magic AIght Ball ✨</h1>
        <p className="app-subtitle">Ask a question, receive mystical wisdom</p>
      </header>

      <main className="app-main">
        <MagicBall answer={answer} isLoading={isLoading} />
        
        <QuestionInput 
          onSubmit={handleAskQuestion}
          isDisabled={isLoading}
        />

        {error && (
          <div className="error-message">
            ⚠️ {error}
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>Powered by Azure OpenAI 🔮</p>
      </footer>
    </div>
  );
}

export default App;

