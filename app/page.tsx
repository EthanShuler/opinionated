import Image from 'next/image'
import React from 'react'
import { Movie } from '../typings'
import tmdbRequests from '../utils/tmdbRequests'
import { posterUrl } from '../utils/constants'
import Link from 'next/link'

type SearchResults = {
  results: [Movie]
}

const getTrendingMovies = async () => {
  const res = await fetch(tmdbRequests.getTrendingMovies)
  const data: SearchResults = await res.json()
  return data.results
}

const Home = async () => {
  const movies = await getTrendingMovies()

  return (
    <main>
      <h1 className='text-4xl font-bold mb-4'>Trending Movies</h1>
      <div className='flex flex-nowrap overflow-x-scroll first-line:items-start mb-8 ml-2 '>
        {movies.map((movie) => (
          <Link href={`/movies/${movie.id}`} key={movie.id} className='flex-none w-1/12
            md:w-1/6 mr-8 p-2 mb-4 border border-black rounded-lg text-center'>
            <h3 className='overflow-auto'>{movie.title}</h3>
            <Image alt={`${movie.title} poster`}
              src={`${posterUrl}${movie?.poster_path || movie?.backdrop_path}`}
              width={288}
              height={300}/>
          </Link>
        ))}
      </div>
    </main>
    
  )
}

export default Home