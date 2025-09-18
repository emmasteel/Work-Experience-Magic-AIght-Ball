import { useState, useRef } from 'react';
import type { QuestionInputProps } from '../../types';
import styles from './QuestionInput.module.css';
import type { FormEvent, ChangeEvent, KeyboardEvent } from 'react';

/**
 * 🎭 QuestionInput Component
 * 
 * Handles user input for asking questions to the Magic 8 Ball
 * Based on requirements from docs/frontend-requirements.md
 * 
 * Features:
 * - Input validation (not empty, reasonable length)
 * - Character count with warnings
 * - Accessibility with ARIA labels
 * - Responsive design
 * - Error handling with user-friendly messages
 */
const QuestionInput = ({ 
  onSubmit, 
  isDisabled, 
  placeholder = "What would you like to know about your future? ✨" 
}: QuestionInputProps) => {
  const [question, setQuestion] = useState('');
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  
  const MAX_CHARS = 200;
  const MIN_CHARS = 3;
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Clear previous errors
    setError('');
    
    // Validation
    if (!question.trim()) {
      setError('Please ask a question! The Magic 8 Ball is eager to help. 🔮');
      inputRef.current?.focus();
      return;
    }
    
    if (question.trim().length < MIN_CHARS) {
      setError('Your question is too short. Please be more specific! ⭐');
      inputRef.current?.focus();
      return;
    }
    
    if (question.length > MAX_CHARS) {
      setError('Your question is too long. Please keep it concise! 📝');
      inputRef.current?.focus();
      return;
    }
    
    // Submit the question
    onSubmit(question.trim());
    setQuestion('');
  };
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuestion(value);
    
    // Clear error when user starts typing
    if (error) {
      setError('');
    }
  };
  
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !isDisabled) {
      handleSubmit(e);
    }
  };
  
  const getCharacterCountClass = () => {
    const remaining = MAX_CHARS - question.length;
    if (remaining < 20) return styles.error;
    if (remaining < 50) return styles.warning;
    return '';
  };
  
  return (
    <form onSubmit={handleSubmit} className={styles.questionInputContainer}>
      <div className={styles.inputGroup}>
        <label htmlFor="question-input" className={styles.inputLabel}>
          <span className={styles.magicalEmoji}>🌟</span>
          Ask the Magic AIght Ball
          <span className={styles.magicalEmoji}>🎱</span>
        </label>
        
        <input
          ref={inputRef}
          id="question-input"
          type="text"
          value={question}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          disabled={isDisabled}
          placeholder={placeholder}
          className={styles.questionInput}
          maxLength={MAX_CHARS}
          aria-describedby={error ? "question-error" : "question-hint"}
          aria-invalid={!!error}
          autoComplete="off"
        />
        
        <div className={`${styles.characterCount} ${getCharacterCountClass()}`}>
          {question.length}/{MAX_CHARS} characters
        </div>
      </div>
      
      {error && (
        <div 
          id="question-error" 
          className={styles.errorMessage}
          role="alert"
          aria-live="polite"
        >
          {error}
        </div>
      )}
      
      <button
        type="submit"
        disabled={isDisabled || !question.trim() || question.length > MAX_CHARS}
        className={styles.submitButton}
        aria-label={isDisabled ? "Please wait while the Magic 8 Ball thinks" : "Ask your question"}
      >
        <span className={styles.buttonText}>
          {isDisabled ? 'Consulting the spirits...' : 'Ask the Magic 8 Ball ✨'}
        </span>
      </button>
      
      {!error && (
        <div 
          id="question-hint" 
          className={styles.characterCount}
          role="status"
          aria-live="polite"
        >
          Think of any question about your future, decisions, or mysteries! 🔮
        </div>
      )}
    </form>
  );
};

export default QuestionInput;