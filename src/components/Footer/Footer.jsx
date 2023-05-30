// assets
import GitHubIcon from '../../assets/icons/github.png'
import LinkedInIcon from '../../assets/icons/linkedin.png'
import EmailIcon from '../../assets/icons/email.png'



// css
import styles from '../../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={`${styles.footer}`}>
      <a href="https://www.linkedin.com/in/monica-maldonado/" target='_blank' rel='noreferrer'>
        <img src={LinkedInIcon} alt="LinkedIn Icon" height='34px' />
      </a>
      <a href="https://github.com/MonicaSue" target='_blank' rel='noreferrer'>
        <img src={GitHubIcon} alt="Github Icon" height='34px' />
      </a>
      <a href="mailto:monica.scoletti@gmail.com" target='_blank' rel='noreferrer'>
        <img src={EmailIcon} alt="Email Icon" height='34px' />
      </a>
    </div>
  )
}

export default Footer;