import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ project, index }) => {
  const handleClick = () => {
    if (project.url) {
      window.open(project.url, '_blank', 'noopener,noreferrer');
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.05,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className={styles.projectCard}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      tabIndex={0}
      role="button"
      aria-label={`View ${project.title} project`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <div className={styles.imageContainer}>
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={600}
          height={400}
          className={styles.projectThumbnail}
          priority={index < 2}
        />
        <div className={styles.overlay} />
      </div>
      
      <div className={styles.projectInfo}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{project.description}</p>
        
        <div className={styles.projectTech}>
          {project.technologies.map((tech, techIndex) => (
            <span key={techIndex} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
        
        {project.status && (
          <div className={styles.statusContainer}>
            <span className={`${styles.status} ${styles[project.status.toLowerCase().replace(' ', '')]}`}>
              {project.status}
            </span>
            <span className={styles.date}>{project.date}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard; 