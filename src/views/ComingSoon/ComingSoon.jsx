import styles from './ComingSoon.module.css'

function ComingSoon({ title, description }) {
  return (
    <div className={styles.screen}>
      <span className={styles.badge}>Em construção</span>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default ComingSoon
