import Image from 'next/image'
import Link from 'next/link'
import { SearchResults } from '../../../../typings'
import { tmdbUrlSmall } from '../../../../utils/constants'
import tmdbRequests from '../../../../utils/tmdbRequests'
import Search from '../../Search'
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
  if (!searchResults || searchResults.length == 0) {
    return (
      <div className={styles.container}>
        <Search searchTerm={decodeURI(searchTerm)} />
        <p className={styles.empty}>Nothing Found</p>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <Search searchTerm={decodeURI(searchTerm)} />
      <div className={styles.results}>
        {searchResults.map((movie) => (
          <Link key={movie.id} href={`${/movies/}${movie.id}`}>
            <div className={styles.movieCard}>
              <div className={styles.wrapper}>
                <div className={styles.image}>
                  <div className={styles.poster}>
                    <Image alt={movie.title} src={`${tmdbUrlSmall}${movie.poster_path}`} fill={true} className={styles.posterImage} />
                  </div>
                </div>
                <div className={styles.movieInfo}>
                  <h4>{movie.title}</h4>
                  <p className={styles.movieOverview}>{movie.overview}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SearchResults