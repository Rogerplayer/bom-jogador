import styles from './DocPage.module.css'

export function DocPage({ title, children }) {
  return (
    <div className={styles.screen}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  )
}

export function DocSection({ heading, children }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{heading}</h2>
      {children}
    </section>
  )
}

export default DocPage
