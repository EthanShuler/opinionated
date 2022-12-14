export interface Movie {
  title: string
  backdrop_path: string | null
  genres: Genre[]
  id: number
  origin_country: string[]
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string | null
  release_date: string
  revenue: number
  status: string
  runtime: number
  vote_count: number
}

export interface MovieDetail extends Movie {
  budget: number
  genres: Genre[]
  homepage: string | null
  imdb_id: string | null
  production_companies: Company[]
  production_countries: Country[]
  revenue: number
  runtime: number | null
  spoken_languages: Language[]
  status: string
  tagline: string | null
}

interface Genre {
  id: number
  name: string
}

interface Company {
  id: number
  logo_path: string | null
  name: string
}

interface Country {
  iso_3166_1: string
  name: string
}

interface Language {
  iso_639_1: string
  name: string
}

export interface Credits {
  id: number
  cast: Cast[]
  crew: Crew[]
}

interface Cast {
  adult: boolean
  gender: number | null
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string | null
  cast_id: number
  character: string
  credit_id: string
  order: number
}

interface Crew {
  adult: boolean
  gender: number | null
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string | null
  credit_id: string
  department: string
  job: string
}

export interface SearchResults {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

export interface Person {
  birthday: string | null
  known_for_department: string
  deathday: string | null
  id: number
  name: string
  also_known_as: string[]
  gender: number
  biography: string
  popularity: number
  place_of_birth: string | null
  profile_path: string | null
  adult: boolean
  imdb_id: string
  homepage: string | null
}