// assets
import profilePicOne from '../../assets/images/profilePic2.png'
import profilePicTwo from '../../assets/images/profilePic3.png'
// import instagram from '../../assets/icons/instagram.png'
import gitHub from '../../assets/icons/github2.png'
import linkedIn from '../../assets/icons/linkedin2.png'
import resume from '../../assets/icons/document.png'

// css
import styles from '../../styles/ProfileCard.module.css'

const ProfileCard = () => {
  return (
    <>
      <div className={styles.profileCardHeader}>
        <h1 className={styles.leftHeader}>Monica</h1>
        <p className={styles.rightHeader}>Full Stack<br/> Engineer</p>
      </div>
      <div className={styles.picContainer}>
        <img className={styles.picMain}  src={profilePicOne} alt="Profile Pic" />
        <img className={styles.picHover} src={profilePicTwo} alt="Profile Pic"  />
      </div>
      <div className={styles.email}>monica.scoletti@gmail.com</div>
      <div className={styles.address}>Based in Pittsburgh, PA</div>
      <div className={styles.iconContainer}>
        <div className={styles.icon}>
            <a href="https://github.com/MonicaSue" target='_blank' rel='noreferrer'>
              <img className={styles.iconImg} src={gitHub} alt="github" />
            </a>
          </div>
        <div className={styles.icon}>
          <a href="https://www.linkedin.com/in/monica-scoletti/" target='_blank' rel='noreferrer'>
            <img className={styles.iconImg} src={linkedIn} alt="linkedin" />
          </a>
        </div>
        <div className={styles.icon}>
          <a href="" target='_blank' rel='noreferrer'>
            <img className={styles.iconImg} src={resume} alt="resume" />
          </a>
        </div>
      </div>
      <div className={styles.emailButton}>
        <a href="mailto:monica.scoletti@gmail.com">
          <button className={styles.button}><i class="far fa-envelope"></i> Get In Touch! </button>
        </a>
      </div>
    </>
  )
}

export default ProfileCard