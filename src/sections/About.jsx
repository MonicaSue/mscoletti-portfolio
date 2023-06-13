

// componenets
import SectionHeader from '../components/SectionHeader/SectionHeader'

// css
import styles from '../styles/About.module.css'

const About = () => {
  return (
    <section id='about' className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <SectionHeader header={'ABOUT'}/>
          <p className={styles.text}>
            Hello, I'm <span>Monica Scoletti</span>.<br /> I am a full-stack software engineer with a background in corporate finance.<br/><br/>
          
            While successful in my previous roles and simultaneously advancing my career in corporate finance; I felt a growing sense of wanting to make a greater impact on the companies where I was employed.  As a passionate and driven woman, I'm ecstatic to be able to deliver a wider range of innovation and solutions to companies as a software developer.  My background of communicating and partnering with engineers in corporate finance allows me to provide a unique skillset in delivering the types of ideas and results to drive bottom-line revenue, while doing so in an aesthetically appealing way.  I'm eager for the chance to combine my work ethic with full-stack capabilities to make a major difference at wherever I'm next hired.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About