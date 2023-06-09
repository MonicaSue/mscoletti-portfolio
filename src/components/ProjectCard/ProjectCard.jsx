import Icon from '../Icon/Icon'

import styles from '../../styles/Projects.module.css'

const ProjectCard = ({ project }) => {
  return (
    <div className={`${styles.projectCard}`}>
      <img src={project.image} alt={project.title} className={styles.projectImg}/>
      <div className={styles.overlay}>
        <div className={styles.title}>
          <h3>{project.title}</h3>
        </div>
        <div className={styles.links}>
          <a href={project.repositoryLink} target='_blank' rel='noreferrer'>
            View Code
          </a>
          <a href={project.deploymentLink} target='_blank' rel='noreferrer'>
            View Site
          </a>
        </div>
        <div className={styles.description}>
          {project.description}
        </div>
        <div className={styles.iconContainter}>
          {project.tech.map((icon, idx) => (
            <Icon tech={icon} key={idx}/>
          ))}

        </div>
      </div>
    </div>
  )
}

export default ProjectCard;