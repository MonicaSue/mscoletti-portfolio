//assets
import arrow from '../assets/icons/rightArrow1.png'

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
            <a href="./MonicaScoletti-Resume.pdf" download="MonicaScoletti-Resume.pdf">
              <p className={styles.resumeLink}>
                View Full Resume 
                <img src={arrow} alt='arrow'/>
              </p>
            </a>
          </div>
          <div className={styles.resumeTimeline}>
            <div className={styles.item}>
              <span className={styles.date}>Expected Graduation: Jun 2025</span>
              <h2>Bachelor Degree in Computer Science</h2>
              <p>Oregon State University</p>
            </div>
            <div className={styles.item}>
              <span className={styles.date}>Mar 2022 - Jun 2023</span>
              <h2>Full Stack Software Engineer Fellow</h2>
              <p>General Assembly</p>
            </div>
            <div className={styles.item}>
              <span className={styles.date}>Aug 2021 - Nov 2022</span>
              <h2>Senior Financial Analyst</h2>
              <p>Argo AI, Pittsburgh, PA</p>
            </div>
            <div className={styles.item}>
              <span className={styles.date}>Jan 2018 - Jul 2021</span>
              <h2>FP&A Manager,</h2>
              <h2>Senior Financial Analyst</h2>
              <p>Zeta Global, New York, NY</p>
            </div>
            <div className={styles.item}>
              <span className={styles.date}>Aug 2014 - Jan 2018</span>
              <h2>Senior Content Support Manager,</h2>
              <h2>Research Analyst</h2>
              <p>Factset Research Systems, New York, NY</p>
            </div>
            <div className={styles.item}>
              <span className={styles.date}>Dec 2012 - Aug 2014</span>
              <h2>Sales Assistant</h2>
              <p>MZ Berger & Co., Long Island City, NY</p>
            </div>
            <div className={styles.item}>
              <span className={styles.date}>May 2012</span>
              <h2>Bachelor Degree in Finance</h2>
              <p>Manhattan College, Riverdale, NY</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Experiences;