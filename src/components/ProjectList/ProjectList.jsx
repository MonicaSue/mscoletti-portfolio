import ProjectCard from "../ProjectCard/ProjectCard";

import styles from '../../styles/Projects.module.css'

const ProjectList = ({ projects }) => {
  return (
    <>
      <div className={styles.filterContainer}>
        <div className={styles.filter}>ALL</div>
        <div className={styles.filter}>JAVASCRIPT</div>
        <div className={styles.filter}>TYPESCRIPT</div>
        <div className={styles.filter}>REACT</div>
      </div>
      <div className={`${styles.projectCardContainer}`}>
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </>
  )
}

export default ProjectList;