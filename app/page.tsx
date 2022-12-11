import Image from 'next/image'
import React from 'react'
import { Movie } from '../typings'
import tmdbRequests from '../utils/tmdbRequests'
import { baseUrl } from '../utils/constants'

type SearchResults = {
  results: [Movie]
}

const getTrendingMovies = async () => {
  const res = await fetch(tmdbRequests.getTrendingMovies)
  const data: SearchResults = await res.json()
  return data
}

const Home = async () => {
  const movies = await getTrendingMovies()

  return (
    <div className='flex flex-row flex-wrap'>
      {movies.results.map((movie) => (
        <div key={movie.id} className='border border-black rounded-lg p-2 m-2'>
          <h3>{movie.title}</h3>
          <Image alt={`${movie.title} poster`}
            src={`${baseUrl}${movie?.poster_path || movie?.backdrop_path}`}
            width={250}
            height={300}/>
        </div>
      ))}
    </div>
  )
}

export default Home