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
    movies?:  Imovie,
    tvShows?: ItvShow
}

export interface IcategoryContent {
    title:string,
    movies?:Imovie,
    tvShows?:ItvShow,
    type:string
}

export interface IitemBox {
    adult?: Boolean,
    backdrop_path?: string,
    genre_ids?: Array<number>,
    id?: number,
    original_language?: string,
    original_title?: string,
    first_air_date?: string,
    original_name?: string,
    overview?: string,
    popularity?: number,
    poster_path?: string,
    release_date?: string,
    title?: string,
    video?: Boolean,
    vote_average?: number,
    vote_count?: number,
}

export interface Imovie {
    results?:Array<ImovieResults>
}

export interface ImovieResults {
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

export interface ItvShow {
    results?:Array<ItvShowResults>
}

export interface ItvShowResults {
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