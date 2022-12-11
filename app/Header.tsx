import Link from 'next/link'
import styles from './styles.module.css'

const Header = () => {
  return (
    <header className={styles.navHeader}>
      <Link href='/' className={styles.navLink}>
        Home
      </Link>
      <Link href='/movies' className={styles.navLink}>
        Movies
      </Link>
    </header>
  )
}

export default Header