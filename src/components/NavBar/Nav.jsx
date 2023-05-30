// npm modules
import { HashLink } from 'react-router-hash-link';

// css
import styles from '../styles/Nav.module.css'

const Nav = () => {
  return ( 
    <nav className={`${styles.navContainer}`}>
      <ul>
        <li>
          <HashLink smooth to='/#about'>
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to='/#expierences'>
            Experiences
          </HashLink>
        </li>
        <li>
          <HashLink smooth to='/#projects'>
            Projects
          </HashLink>
        </li>
        <li>
          <HashLink smooth to='/#contact'>
            Contact
          </HashLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;