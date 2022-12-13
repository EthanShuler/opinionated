import React from 'react'
import tmdbRequests from '../../../utils/tmdbRequests'
import { notFound } from 'next/navigation'
import { Credits, MovieDetail } from '../../../typings'
import Image from 'next/image'
import { tmdbUrlMediuim, tmdbUrlOriginal } from '../../../utils/constants'
import Review from './Review'
import styles from './styles.module.css'
import { formatDate, formatTime } from '../../../utils/dateTime'


interface PageProps {
  params: {
    movieId: string
  }
}

const fetchMovie = async (movieId: string) => {
  const res = await fetch(tmdbRequests.getMovie(movieId))
  const data: MovieDetail = await res.json()
  return data
}

const fetchComposers = async (movieId: string) => {
  const res = await fetch(tmdbRequests.getMovieCredits(movieId))
  const data: Credits = await res.json()
  const composers = data.crew.filter(crew => crew.job == 'Original Music Composer')
  return composers
}

const Movie = async ({ params: { movieId }}: PageProps) => {
  const movie = await fetchMovie(movieId)
  const composers = await fetchComposers(movieId)

  if (!movie.id) return notFound()


  return (
    <>
    <div className={styles.movieContainer} >
      <h1 className={styles.movieTitle}>{movie.title} ({movie.release_date.substring(0, 4)})</h1>
      <div className={styles.movieFacts}>
        <p>{formatDate(movie.release_date)}</p>
        <p>&#x2022;</p>
        {movie.genres.map(genre => (
          <p key={genre.id}>{genre.name}</p>
        ))}
        <p>&#x2022;</p>
        <p>{movie?.runtime ? formatTime(movie.runtime) : ''}</p>
      </div>
      <p className={styles.tagline}>{movie.tagline}</p>
      <div className={styles.mediaRow}>
        <Image alt={`${movie.title} poster`} src={`${tmdbUrlMediuim}${movie?.poster_path}`}
          width={300} height={300} className={styles.poster} />
        <Image alt={`${movie.title} backdrop`}
          src={`${tmdbUrlOriginal}${movie.backdrop_path}`} width={800} height={600}
          className={styles.backdrop} />
      </div>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h3>Music</h3>
      {composers.map(composer => (
        <p key={composer.id}>{composer.job}: <span className={styles.composer}>{composer.name}</span></p>
      ))}
      <Review />
    </div>
      
    </>
  )
}

export default Movie