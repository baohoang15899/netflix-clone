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
    Loading: Iloading,
    trendingTvshow: any
    trendingMovie: any
    search: IdataResults[]
    allGenreMovie: IdataResults[]
    allGenreTvshow: IdataResults[]
    Page: Ipage
    modal: Imodal
}

interface IvideoResults {
    id: string
    iso_639_1: string
    iso_3166_1: string
    key: string
    name: string
    official: Boolean
    published_at: string
    site: string
    size: number
    type: string
}
export interface Ivideo {
    id: number
    results: IvideoResults[]
}
interface Imodal {
    status: Boolean
    id: string
    media_type: string
}
interface Ipage {
    tvShow: number,
    movie: number
}
interface Iloading {
    trending: Boolean,
    popular: Boolean,
    genreTv: Boolean,
    genreMovie: Boolean,
    moviePage: Boolean,
    tvShowPage: Boolean,
    movieMore: Boolean,
    tvShowMore: Boolean,
    searchLoad: Boolean
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
    data: Ibanner,
    genreMenu?: Boolean
    id?: string
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
    media_type: string
}

export interface ImovieDetail {
    id?: number,
    adult?: Boolean,
    backdrop_path?: string,
    original_title?: string,
    overview?: string,
    release_date?: string,
    runtime?: any,
    tagline?: string,
    genres?: IgenreData[],
    vote_average?: number,
    vote_count?: number,
    cast: IcastInfo[],
    crew: Icrew[]
}

interface Icreated_by {
    credit_id?: string
    gender?: number
    id?: number
    name?: string
    profile_path?: string
}

interface IcastInfo {
    adult: Boolean
    cast_id: number
    character: string
    credit_id: string
    gender: number
    id: number
    known_for_department: string
    name: string
    order: number
    original_name: string
    popularity: number
    profile_path: string
}

export interface Irecommendation {
    adult: Boolean
    backdrop_path: string
    genre_ids: Array<number>
    id: number
    media_type: string
    original_language: string
    original_title: string
    original_name: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: Boolean
    vote_average: number
    vote_count: number
    first_air_date: string
    name: string
}

interface Icrew {
    adult: Boolean
    credit_id: string
    department: string
    gender: number
    id: number
    job: string
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path: string
}
export interface ItvDetail {
    id: number,
    tagline: string,
    genres: IgenreData[],
    vote_average: number,
    vote_count: number
    first_air_date: string,
    name: string,
    original_name: string,
    last_air_date: string,
    number_of_episodes: number,
    number_of_seasons: number,
    created_by: Icreated_by[],
    backdrop_path: string,
    episode_run_time: Array<any>
    overview: string,
    cast: IcastInfo[],
    crew: Icrew[]
}