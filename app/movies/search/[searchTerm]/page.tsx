import Image from 'next/image'
import Link from 'next/link'
import { SearchResults } from '../../../../typings'
import { tmdbUrlSmall } from '../../../../utils/constants'
import tmdbRequests from '../../../../utils/tmdbRequests'
import styles from './styles.module.css'

type PageProps = {
  params: {
    searchTerm: string
  }
}

const search = async (searchTerm: string) => {
  const result = await fetch(tmdbRequests.searchMovies(searchTerm))
  const data: SearchResults = await result.json()
  return data.results
}

const SearchResults = async ({ params: { searchTerm } }: PageProps) => {
  const searchResults = await search(searchTerm)

  return (
    <div className={styles.container}>
      <ol>
        {searchResults.map((movie) => (
          <li key={movie.id} className={styles.movieCard}>
            <Image alt={movie.title} src={`${tmdbUrlSmall}${movie.poster_path}`} width={100} height={100} />
            <div className={styles.movieInfo}>
              <Link className={styles.movieTitle} href={`${/movies/}${movie.id}`}>{movie.title}</Link>
              <p>{movie.overview}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default SearchResults