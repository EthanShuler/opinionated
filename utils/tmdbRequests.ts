const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

const getMovie = (id: string) => {
  return `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
}

const getMovieCredits = (id: string) => {
  return `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
}

const searchMovies = (query: string) => {
  return `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
}

const getPerson = (id: string) => {
  return `${BASE_URL}/person/${id}?api_key=${API_KEY}&language=en-US`
}

const tmdbRequests = {
  getTrendingMovies: `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US`,
  getMovie,
  getMovieCredits,
  searchMovies,
  getPerson,
}

export default tmdbRequests