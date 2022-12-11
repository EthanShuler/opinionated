import React from 'react'
import tmdbRequests from '../../../utils/tmdbRequests'
import { notFound } from 'next/navigation'
import { Movie } from '../../../typings'
import Image from 'next/image'
import { backdropUrl } from '../../../utils/constants'

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
      <h1 className='text-4xl font-bold mb-4'>{movie.title}</h1>
      <p>{movie.overview}</p>
      <Image alt={`${movie.title} poster`}
        src={`${backdropUrl}${movie?.backdrop_path || movie?.poster_path}`}
        width={1920} height={1080} />
    </div>
  )
}

export default Movie