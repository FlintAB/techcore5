import styles from './PageLoader.module.css'

export const PageLoader = () => (
   <div
      className={styles.container}
      role="status"
      aria-live="polite"
      aria-busy="true"
   >
      <span className={styles.spinner} aria-hidden="true" />
      <span className={styles.text}>Загрузка...</span>
   </div>
)