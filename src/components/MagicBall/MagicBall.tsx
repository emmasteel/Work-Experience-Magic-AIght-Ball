import type { MagicBallProps } from '../../types';
import styles from './MagicBall.module.css';

/**
 * 🎱 MagicBall Component
 * 
 * Displays the mystical Magic 8 Ball with AI-powered responses
 * Based on requirements from docs/frontend-requirements.md
 * 
 * Features:
 * - Responsive design (mobile-first)
 * - Accessibility with ARIA labels
 * - Loading animations and hover effects
 * - Mystical visual design
 */
const MagicBall = ({ question, answer, isLoading }: MagicBallProps) => {
  const displayAnswer = () => {
    if (isLoading) {
      return <div className={styles.loadingSpinner} aria-label="The Magic 8 Ball is thinking..."></div>;
    }
    
    if (answer) {
      return (
        <div 
          className={`${styles.answerText} ${styles.visible}`}
          role="status"
          aria-live="polite"
          aria-label={`Magic 8 Ball says: ${answer}`}
        >
          {answer}
        </div>
      );
    }
    
    return (
      <div className={styles.answerText} aria-label="Ask a question to reveal your fortune">
        <span className={styles.magicalEmoji}>✨</span>
        Ask me
        <span className={styles.magicalEmoji}>🔮</span>
      </div>
    );
  };

  return (
    <div className={styles.magicBallContainer}>
      {question && (
        <div className={styles.questionDisplay} role="heading" aria-level={2}>
          "{question}"
        </div>
      )}
      
      <div 
        className={`${styles.magicBall} ${isLoading ? styles.loading : ''}`}
        role="img"
        aria-label="Magic 8 Ball"
        tabIndex={0}
      >
        <div className={styles.answerWindow}>
          {displayAnswer()}
        </div>
      </div>
      
      {!question && !isLoading && (
        <div 
          className={styles.questionDisplay}
          role="status"
          aria-live="polite"
        >
          Think of a question and ask the mystical Magic AIght Ball! 
          <span className={styles.magicalEmoji}>⭐</span>
        </div>
      )}
    </div>
  );
};

export default MagicBall;