import { projects } from '../data/projectsData'

// componenets
import SectionHeader from '../components/SectionHeader/SectionHeader'
import ProjectList from '../components/ProjectList/ProjectList'


const Projects = () => {
  return (
    <section id='projects'>
      <SectionHeader header={'PROJECTS'}/>
      <ProjectList projects={projects}/>
    </section>
  )
}

export default Projects