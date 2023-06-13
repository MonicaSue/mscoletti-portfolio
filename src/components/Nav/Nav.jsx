// npm modules
import { HashLink } from 'react-router-hash-link';

// css
import styles from '../../styles/Nav.module.css'

const Nav = () => {
  return ( 
    <ul className={styles.nav}>
      <li>
        <HashLink smooth to='/#home'>
          <i class="fa-solid fa-house"></i>
        </HashLink>
      </li>
      <li>
        <HashLink smooth to='/#projects'>
          <i class="fa-solid fa-grip-vertical" ></i>
        </HashLink>
      </li>
      <li>
        <HashLink smooth to='/#about'>
          <i class="fa-solid fa-user" ></i>
        </HashLink>
      </li>
      <li>
        <HashLink smooth to='/#resume'>
          <i class="fa-solid fa-briefcase" ></i>
        </HashLink>
      </li>
    </ul>
  )
}

export default Nav;