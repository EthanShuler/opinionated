export interface Movie {
  title: string
  backdrop_path: string
  genres: Genre[]
  id: number
  origin_country: string[]
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  revenue: number
  status: string
  runtime: number
  vote_count: number
}

export interface Review {
  rating: number
  content: string
}