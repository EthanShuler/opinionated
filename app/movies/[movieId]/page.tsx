import React from 'react'
import tmdbRequests from '../../../utils/tmdbRequests'
import { notFound } from 'next/navigation'
import { Credits, MovieDetail } from '../../../typings'
import Image from 'next/image'
import { tmdbUrlMediuim, tmdbUrlOriginal } from '../../../utils/constants'
import Review from './Review'
import styles from './styles.module.css'
import { formatDate, formatTime } from '../../../utils/dateTime'
import Reviews from './Reviews'
import Link from 'next/link'

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

const fetchCredits = async (movieId: string) => {
  const res = await fetch(tmdbRequests.getMovieCredits(movieId))
  const data: Credits = await res.json()
  return data
}

const Movie = async ({ params: { movieId } }: PageProps) => {
  const movie = await fetchMovie(movieId)
  const credits = await fetchCredits(movieId)

  if (!movie.id) return notFound()

  return (
    <>
      {/* <div className={styles.movieContainer} > */}
      <div style={{
        backgroundImage: `linear-gradient(to bottom, rgba(54, 54, 54, 0.281), rgba(66, 66, 66, 0.788)), url(${tmdbUrlOriginal}${movie?.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        position: 'relative',
        zIndex: 1,
      }} >
        <div className={styles.movieContainer} >
          <div className={styles.poster}>
            <Image alt={`${movie.title} poster`} src={`${tmdbUrlMediuim}${movie?.poster_path}`}
              fill={true} className={styles.movieImage} />
          </div>
          <div className={styles.movieInfo}>
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

            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </div>
          
        </div>


        {/* {credits.cast.map(actor => (
        <p key={actor.id}>{actor.character}: <span className={styles.composer}>
          <Link href={`/people/${actor.id}`}>{actor.name}</Link>
        </span></p>
      ))}
      {credits.crew.map(crew => (
        <p key={crew.id}>{crew.job}: <span className={styles.composer}>
          <Link href={`/people/${crew.id}`}>{crew.name}</Link>
        </span></p>
      ))} */}
        <Review movieId={movie.id} />
      </div>
      <div className={styles.reviewsContainer}>
        {/* @ts-expect-error Server Component */}
        <Reviews movieId={movie.id} />
      </div>

    </>
  )
}

export default Movie