import Image from 'next/image'
import React from 'react'
import { Movie } from '../typings'
import tmdbRequests from '../utils/tmdbRequests'
import { tmdbUrlSmall } from '../utils/constants'
import Link from 'next/link'
import styles from './styles.module.css'
import supabase from '../utils/supabase'

type FetchResults = {
  results: [Movie]
}

const getTrendingMovies = async () => {
  const res = await fetch(tmdbRequests.getTrendingMovies)
  const data: FetchResults = await res.json()
  return data.results
}

 const getUser = async () => {
    const { data: user, error } = await supabase.auth.getUser()
    console.log(user)
    return user
  }

const Home = async () => {
  const user = await supabase.auth.getUser()

  const movies = await getTrendingMovies()

  return (
    <main>
      {/* {user} */}
      <div className={styles.moviesGrouping}>
        <h1 className={styles.groupTitle}>Trending Movies</h1>
        <div className={`${styles.cardGroup} ${styles.scrollbar}`}>
          {movies.map((movie) => (
            <Link href={`/movies/${movie.id}`} key={movie.id} className={styles.movieCard}>
              <div className={styles.movieCardInterior}>
                <Image alt={`${movie.title} poster`}
                  src={`${tmdbUrlSmall}${movie?.poster_path || movie?.backdrop_path}`}
                  width={288}
                  height={300}/>
                <h3 className={styles.movieTitle}>{movie.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
    </main>
    
  )
}

export default Home