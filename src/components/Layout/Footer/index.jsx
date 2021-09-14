import styles from './index.module.scss'

export default function Footer() {
  return (
    <footer className={styles['footer']}>
      <div className="container">
        <p className={styles['footer__credits']}>Developed by Ahmad Karimzade</p>
      </div>
    </footer>
  )
}