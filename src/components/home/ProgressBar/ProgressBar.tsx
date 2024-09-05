import styles from './ProgressBar.module.sass';

export default function ProgressBar ({ totalQuestions = 20, completedQuestions = 0 }) {
  const totalBlocks = 7;
  const percentageCompleted = (completedQuestions / totalQuestions) * 100;
  const filledBlocks = Math.round((percentageCompleted / 100) * totalBlocks);

  return (
    <div className={styles.progressBar}>
      {Array.from({ length: totalBlocks }).map((_, index) => (
        <div
          key={index}
          className={`${styles.block} ${index < filledBlocks ? styles.filled : ''}`}
        />
      ))}
    </div>
  );
};
