// data
import { skills } from '../data/skills'

// componenets
import Icon from '../components/Icon/Icon'
import SectionHeader from '../components/SectionHeader/SectionHeader'

// css
import styles from '../styles/Home.module.css'


const Home = () => {
  return (
    <section id='home' className={styles.home}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <SectionHeader header={'INTRODUCTION'}/>
            <h1 className={styles.text}>
              I'm <span>Monica</span>, Full Stack Software Engineer and Former FP&A Manager
            </h1>
          </div>
          <div className={styles.skills}>
            {skills.map((skill, idx) => (
              <div className={styles.skill} key={idx}>
                <Icon tech={skill.tech}/>
                <p>{skill.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home