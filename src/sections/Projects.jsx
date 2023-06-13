import { projects } from '../data/projectsData'

// componenets
import SectionHeader from '../components/SectionHeader/SectionHeader'
import ProjectList from '../components/ProjectList/ProjectList'

// styles
import styles from '../styles/Projects.module.css'

const Projects = () => {
  return (
    <section id='projects' className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <SectionHeader header={'PROJECTS'}/>
            <h1>Featured <span>Projects</span></h1>
          </div>
          <ProjectList projects={projects}/>
        </div>
      </div>
    </section>
  )
}

export default Projects