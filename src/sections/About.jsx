// componenets
import SectionHeader from '../components/SectionHeader/SectionHeader'

// css
import styles from '../styles/About.module.css'

const About = () => {
  return (
    <section id='about' className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <SectionHeader header={'ABOUT'}/>
            <h1>My <span>Story</span></h1>
          </div>
          <div className={styles.text}>
            <p className={styles.text}>
              I am a full-stack software engineer with a background in corporate finance. While successful in my previous roles and simultaneously advancing my career in corporate finance, I felt a growing sense of wanting to make a greater impact on the companies where I was employed.  As a passionate and driven woman, I'm ecstatic to be able to deliver a wider range of innovation and solutions to companies as a software developer.<br/><br/>  
              
              My background of communicating and partnering with engineers in corporate finance allows me to provide a unique skillset in delivering the types of ideas and results to drive the bottom line while doing so in an aesthetically appealing way.  I'm eager for the chance to combine my work ethic with full-stack capabilities to make a major difference in the next endeavor.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About