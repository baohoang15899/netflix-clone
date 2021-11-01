export interface IprivateRouter {
    component: any,
    auth: Boolean
}

export interface IhomeReducer {
    trending: any
    allMoviesTvshowsTrending: ItrendingMovieTv
    genresMovie: IgenreData[]
    genresTv: IgenreData[]
    allMovie?: Imovie[],
    allTvshow: ItvShow[],
    Loading: Iloading
}

interface Iloading{
    trending:Boolean,
    popular:Boolean,
    genreTv:Boolean,
    genreMovie:Boolean
}
interface IsingleMovie {
    genre?: string,
    payload?: Imovie
    id?: number
}

// interface movieGenres {
//     Action?:IdataResults[]
//     Adventure?:IdataResults[]
//     Animation?:IdataResults[]
//     Comedy?:IdataResults[]
//     Crime?:IdataResults[]
//     Documentary?:IdataResults[]
//     Drama?:IdataResults[]
//     Family?:IdataResults[]
//     Fantasy?:IdataResults[]
//     History?:IdataResults[]
//     Horror?:IdataResults[]
//     Music?:IdataResults[]
//     Mystery?:IdataResults[]
//     Romance?:IdataResults[]
//     Science_Fiction?:IdataResults[]
//     TV_Movie?:IdataResults[]
//     Thriller?:IdataResults[]
//     War?:IdataResults[]
//     Western?:IdataResults[]
// }
export interface IgenreData {
    id: number,
    name: string
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
    movies?: Imovie,
    tvShows?: ItvShow
}

export interface IcategoryContent {
    title?: string,
    movies?: Imovie,
    tvShows?: ItvShow,
    type: string
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
    results?: IdataResults[]
    genre?: string
}

export interface ItvShow {
    results?: IdataResults[]
    genre?: string
}

export interface IdataResults {
    backdrop_path?: string,
    first_air_date?: string,
    genre_ids?: Array<number>,
    original_title?: string,
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
    release_date?: string,
    video?: Boolean,
    title?: string,
}