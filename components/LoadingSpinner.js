import { motion } from 'framer-motion';
import styles from '../styles/LoadingSpinner.module.css';

const LoadingSpinner = () => {
  const spinVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <div className={styles.loadingContainer}>
      <motion.div
        className={styles.spinner}
        variants={spinVariants}
        animate="animate"
      />
      <p className={styles.loadingText}>Loading amazing AI projects...</p>
    </div>
  );
};

export default LoadingSpinner; 