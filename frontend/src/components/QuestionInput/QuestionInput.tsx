import React, { useState } from 'react';
import styles from './QuestionInput.module.css';

interface QuestionInputProps {
  onSubmit: (question: string) => void;
  isDisabled: boolean;
  placeholder?: string;
}

const QuestionInput: React.FC<QuestionInputProps> = ({ 
  onSubmit, 
  isDisabled, 
  placeholder = "Ask the Magic 8 Ball a question..." 
}) => {
  const [question, setQuestion] = useState('');
  const [wordCountError, setWordCountError] = useState('');

  // Count words excluding punctuation
  const countWords = (text: string): number => {
    if (!text.trim()) return 0;
    // Remove punctuation and count words
    const cleanedText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?'"]/g, '').trim();
    return cleanedText.split(/\s+/).filter(word => word.length > 0).length;
  };

  const wordCount = countWords(question);
  const maxWords = 30;
  const isOverLimit = wordCount > maxWords;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim() && !isOverLimit) {
      onSubmit(question);
      setQuestion('');
      setWordCountError('');
    } else if (isOverLimit) {
      setWordCountError(`Please keep your question to ${maxWords} words or less! ✨`);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.input}
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
            setWordCountError('');
          }}
          placeholder={placeholder}
          disabled={isDisabled}
          maxLength={500}
          aria-label="Question input"
        />
        <button 
          type="submit" 
          className={styles.button}
          disabled={isDisabled || !question.trim() || isOverLimit}
          aria-label="Ask question"
        >
          Ask 🔮
        </button>
      </div>
      <p className={styles.hint}>
        {question.length > 0 && (
          <span className={isOverLimit ? styles.error : ''}>
            {wordCount}/{maxWords} words
          </span>
        )}
      </p>
      {wordCountError && (
        <p className={styles.errorMessage}>{wordCountError}</p>
      )}
    </form>
  );
};

export default QuestionInput;
