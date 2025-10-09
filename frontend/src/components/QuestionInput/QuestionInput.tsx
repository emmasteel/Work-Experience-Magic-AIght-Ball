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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim()) {
      onSubmit(question);
      setQuestion('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.input}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder={placeholder}
          disabled={isDisabled}
          maxLength={500}
          aria-label="Question input"
        />
        <button 
          type="submit" 
          className={styles.button}
          disabled={isDisabled || !question.trim()}
          aria-label="Ask question"
        >
          Ask 🔮
        </button>
      </div>
      <p className={styles.hint}>
        {question.length > 0 && `${question.length}/500 characters`}
      </p>
    </form>
  );
};

export default QuestionInput;
