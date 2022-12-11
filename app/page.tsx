import Image from 'next/image'
import React from 'react'
import { Movie } from '../typings'
import tmdbRequests from '../utils/tmdbRequests'
import { posterUrl } from '../utils/constants'
import Link from 'next/link'
import styles from './styles.module.css'

type FetchResults = {
  results: [Movie]
}

const getTrendingMovies = async () => {
  const res = await fetch(tmdbRequests.getTrendingMovies)
  const data: FetchResults = await res.json()
  return data.results
}

const Home = async () => {
  const movies = await getTrendingMovies()

  return (
    <main>
      <h1 className={styles.groupTitle}>Trending Movies</h1>
      <div className={`${styles.cardGroup} ${styles.scrollbar}`}>
        {movies.map((movie) => (
          <Link href={`/movies/${movie.id}`} key={movie.id} className={styles.movieCard}>
            <Image alt={`${movie.title} poster`}
              src={`${posterUrl}${movie?.poster_path || movie?.backdrop_path}`}
              width={288}
              height={300}/>
            <h3 className={styles.movieTitle}>{movie.title}</h3>
          </Link>
        ))}
      </div>
    </main>
    
  )
}

export default Home