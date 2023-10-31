// assets
import CSS from '../../assets/icons/css.png'
import EJS from '../../assets/icons/ejs.png'
import EXPRESS from '../../assets/icons/express.png'
import GIT from '../../assets/icons/git.png'
import HTML from '../../assets/icons/html.png'
import JAVASCRIPT from '../../assets/icons/javascript.png'
import MONGODB from '../../assets/icons/mongodb.png'
import MUI from '../../assets/icons/mui.png'
import NODE from '../../assets/icons/node.png'
import POSTGRES from '../../assets/icons/postgres.png'
import PYTHON from '../../assets/icons/python.png'
import REACT from '../../assets/icons/react.png'
import RECHARTS from '../../assets/icons/recharts.png'
import TYPESCRIPT from '../../assets/icons/typescript.png'
import VITE from '../../assets/icons/vite.png'


import styles from './Icon.module.css'

const iconTable = {
  CSS,
  EJS,
  EXPRESS,
  GIT,
  HTML,
  JAVASCRIPT,
  MONGODB,
  MUI,
  NODE,
  POSTGRES,
  PYTHON,
  REACT,
  RECHARTS,
  TYPESCRIPT,
  VITE
}

const Icon = ({tech}) => {
  const techIcon = iconTable[tech]

  return (
    <img
      className={styles.icon}
      src={techIcon}
      alt='Technology icon'
    />
    
  )
}

export default Icon;