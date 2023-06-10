// css
import styles from './SectionHeader.module.css'

const SectionHeader = ({header}) => {
  return (
    <>
      <div className={styles.header}>{header}</div>
      <div className={styles.headerBar}></div>
    </>
  )
}

export default SectionHeader