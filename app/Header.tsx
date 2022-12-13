import Link from 'next/link'
import styles from './styles.module.css'

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/movies', label: 'MOVIES' },
  { href: '/account', label: 'ACCOUNT' },
  { href: '/lists', label: 'LISTS' },
]

const Header = () => {
  return (
    <header className={styles.navHeader}>
      {navLinks.map(({ href, label }) => (
        <Link className={styles.navLink} href={href} key={href}>
          {label}
        </Link>
      ))}
    </header>
  )
}

export default Header