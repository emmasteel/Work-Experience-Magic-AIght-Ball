import React from 'react';
import styles from './MagicBall.module.css';

interface MagicBallProps {
  answer: string;
  isLoading: boolean;
}

const MagicBall: React.FC<MagicBallProps> = ({ answer, isLoading }) => {
  return (
    <div className={styles.container}>
      <div className={styles.ball}>
        <div className={styles.window}>
          {isLoading ? (
            <div className={styles.loading}>
              <span className={styles.loadingText}>✨</span>
            </div>
          ) : answer ? (
            <p className={styles.answer}>{answer}</p>
          ) : (
            <p className={styles.placeholder}>Ask a question...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MagicBall;
