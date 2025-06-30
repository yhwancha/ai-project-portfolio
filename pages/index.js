import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { projects } from '../data/projects';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setProjectsData(projects);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className={styles.container}>
      <motion.header 
        className={styles.header}
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className={styles.title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          AI Project Portfolio
        </motion.h1>
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Discover innovative artificial intelligence solutions
        </motion.p>
      </motion.header>

      <main className={styles.main}>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <LoadingSpinner />
            </motion.div>
          ) : (
            <motion.div
              key="projects"
              className={styles.projectsGrid}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {projectsData.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <motion.footer 
        className={styles.footer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <p>&copy; 2024 AI Project Portfolio. All rights reserved.</p>
        <p className={styles.footerSub}>Built with Next.js and Framer Motion</p>
      </motion.footer>
    </div>
  );
} 