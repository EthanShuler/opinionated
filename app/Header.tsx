'use client'
import Link from 'next/link'
import styles from './styles.module.css'
import { useSupabase } from '../components/supabase-provider'

const navLinks = [
  { href: '/', label: 'OPINIONATED' },
  { href: '/movies', label: 'MOVIES' },
  { href: '/people', label: 'PEOPLE' },
  { href: '/lists', label: 'LISTS' },
]

const Header = () => {
  const { session } = useSupabase()
  return (
    <header className={styles.navHeader}>
      {navLinks.map(({ href, label }) => (
        <Link className={styles.navLink} href={href} key={href}>
          {label}
        </Link>
      ))}
      {session ? ( 
        <Link className={styles.accountLink} href={'/register'}>
          {session.user.email}
        </Link>
       ) : (
        <Link className={styles.accountLink} href={'/register'}>
          SIGN IN
        </Link> )}
    </header>
  )
}

export default Header