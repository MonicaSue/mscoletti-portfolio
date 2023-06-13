// css
import styles from './SectionHeader.module.css'

const SectionHeader = ({header}) => {
  return (
    <>
      <h4 className={styles.header}>{header}</h4>
    </>
  )
}

export default SectionHeader