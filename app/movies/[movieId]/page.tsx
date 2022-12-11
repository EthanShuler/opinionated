import React from 'react'
import tmdbRequests from '../../../utils/tmdbRequests'
import { notFound } from 'next/navigation'
import { Movie } from '../../../typings'
import Image from 'next/image'
import { backdropUrl } from '../../../utils/constants'
import Review from './Review'
import styles from './styles.module.css'

interface PageProps {
  params: {
    movieId: string
  }
}

const fetchMovie = async (movieId: string) => {
  const res = await fetch(tmdbRequests.getMovie(movieId))
  const data: Movie = await res.json()
  return data
}

const Movie = async ({ params: { movieId }}: PageProps) => {
  const movie = await fetchMovie(movieId)

  if (!movie.id) return notFound()

  return (
    <div>
      <h1 className={styles.movieTitle}>{movie.title}</h1>
      <p>{movie.overview}</p>
      <Image alt={`${movie.title} poster`}
        src={`${backdropUrl}${movie?.backdrop_path || movie?.poster_path}`}
        width={300} height={300} />
      
      <Review />
    </div>
  )
}

export default Movie