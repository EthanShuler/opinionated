import Link from 'next/link'
import styles from './styles.module.css'

const navLinks = [
  { href: '/', label: 'SOUNDTRACKED' },
  { href: '/movies', label: 'MOVIES' },
  { href: '/people', label: 'PEOPLE' },
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
      <Link className={styles.accountLink} href={'/register'}>
          ACCOUNT
        </Link>
    </header>
  )
}

export default Header