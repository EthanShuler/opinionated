const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

const getMovie = (id: string) => {
  return `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
}

const tmdbRequests = {
  getTrendingMovies: `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US`,
  getMovie,
}

export default tmdbRequests