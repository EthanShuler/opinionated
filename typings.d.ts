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

export interface MovieDetail extends Movie {
  budget: number
  genres: Genre[]
  homepage: string
  imdb_id: string
  production_companies: Company[]
  production_countries: Country[]
  revenue: number
  runtime: number
  spoken_languages: Language[]
  status: string
  tagline: string
}

export interface Genre {
  id: number
  name: string
}

export interface Company {
  id: number
  logo_path: string
  name: string
}

export interface Country {
  iso_3166_1: string
  name: string
}

export interface Language {
  iso_639_1: string
  name: string
}

export interface Review {
  rating: number
  content: string
}