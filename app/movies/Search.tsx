'use client'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'
import styles from './styles.module.css'

const Search = () => {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearch('')
    router.push(`/movies/search/${search}`)
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={search}
        placeholder="Enter the Search Term"
        onChange={(e) => setSearch(e.target.value)}
        className={styles.Input}
      />
      <button type='submit' className={`${styles.Button} ${styles.themedButton}`}>
        Search
      </button>
    </form>
  )
}

export default Search