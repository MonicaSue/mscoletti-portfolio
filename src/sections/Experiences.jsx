// assets
// import arrow from '../assets/icons/rightArrow.png'

// componenets
import SectionHeader from '../components/SectionHeader/SectionHeader'

// css
import styles from '../styles/Experiences.module.css'

const Experiences = () => {
  return (
    <section id='resume' className={styles.resume}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <SectionHeader header={'RESUME'}/>
            <h1>Education & <span>Experience</span></h1>
            <p>View Full Resume</p>
          </div>
          <div className={styles.resumeTimeline}>
            <div className={styles.item}>
              <span className={styles.date}>Mar 2022 - Jun 2023</span>
              <h2>Full Stack Software Engineer</h2>
              <p>General Assembly</p>
            </div>
            <div className={styles.item}>
              <span className={styles.date}>Aug 2021 - Nov 2022</span>
              <h2>Senior Financial Analyst</h2>
              <p>Argo AI, Pittsburgh, PA</p>
            </div>
            <div className={styles.item}>
              <span className={styles.date}>Jan 2018 - Jul 2021</span>
              <h2>FP&A Manager</h2>
              <h2>Senior Financial Analyst</h2>
              <p>Zeta Global, NY, NY</p>
            </div>
            <div className={styles.item}>
              <span className={styles.date}>Aug 2014 - Jan 2018</span>
              <h2>Senior Content Support Manager</h2>
              <h2>Research Analyst</h2>
              <p>Factset Research Systems, NY, NY</p>
            </div>
            <div className={styles.item}>
              <span className={styles.date}>Dec 2012 - Aug 2014</span>
              <h2>Sales Assistant</h2>
              <p>MZ Berger & Co., Long Island City, NY</p>
            </div>
            <div className={styles.item}>
              <span className={styles.date}>May 2012</span>
              <h2>Bachelor Degree in Finance</h2>
              <p>Manhattan College, New York, NY</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Experiences;