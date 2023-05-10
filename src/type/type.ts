export interface IUser {
    id: number
    poster_path: string
    title: string
    release_date: number
    key: string
    profile_path: string
    runtime: any
}

export interface IMovie {
    adult: boolean
    backdrop_path: string
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: number
    title: string
    video: boolean
    vote_average: number
    vote_count: number
    key: string
    profile_path: string
    runtime: any

}

export interface IActors {
    adult: boolean
    also_known_as: []
    biography: string
    birthday: null
    deathday: null
    gender: number
    homepage: null
    id: number
    imdb_id: string
    known_for_department: string
    name: string
    place_of_birth: null
    popularity: number
    profile_path: string
    key: ''
    runtime: any
    poster_path: string

}