import ProjectCard from "../ProjectCard/ProjectCard";

import styles from '../../styles/Projects.module.css'

const ProjectList = ({ projects }) => {
  return (
    <>
      <div className={`${styles.projectCardContainer}`}>
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </>
  )
}

export default ProjectList;