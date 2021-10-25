export interface IprivateRouter {
    component: any,
    auth: Boolean
}

export interface IhomeReducer {
    trending: any
    allMoviesTvshowsTrending: ItrendingMovieTv
}

interface Ibanner {
    backdrop_path: string,
    title?: string,
    name?: string,
    overview?: string,
    id?: any,
    media_type?: string
}

export interface IbannerData {
    data: Ibanner
}

export interface ItrendingMovieTv {
    movies: Array<Imovie>,
    tvShows: Array<ItvShow>
}

interface Imovie {
    adult?: Boolean,
    backdrop_path?: string,
    genre_ids?: Array<number>,
    id?: number,
    original_language?: string,
    original_title?: string,
    overview?: string,
    popularity?: number,
    poster_path?: string,
    release_date?: string,
    title?: string,
    video?: Boolean,
    vote_average?: number,
    vote_count?: number,
}

interface ItvShow {
    backdrop_path?: string,
    first_air_date?: string,
    genre_ids?: Array<number>,
    id?: number,
    name?: string,
    origin_country?: Array<string>,
    original_language?: string,
    original_name?: string,
    overview?: string,
    popularity?: number,
    poster_path?: string,
    vote_average?: number,
    vote_count?: number,
}