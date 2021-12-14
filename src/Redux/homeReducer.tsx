import { createSlice, configureStore } from '@reduxjs/toolkit'
import { getFavorite } from 'api/Services'
import { IdataResults, IhomeReducer } from 'global/Home/Interfaces'

const initState: IhomeReducer = {
    trending: {},
    allMoviesTvshowsTrending: {
        movies: {},
        tvShows: {}
    },
    search: [],
    allGenreMovie: [],
    allGenreTvshow: [],
    trendingTvshow: {},
    trendingMovie: {},
    genresTv: [],
    genresMovie: [],
    allMovie: [],
    allTvshow: [],
    movieFavorite: [],
    tvFavorite: [],
    Page: {
        tvShow: 0,
        movie: 0
    },
    Loading: {
        trending: false,
        popular: false,
        genreTv: false,
        genreMovie: false,
        moviePage: false,
        tvShowPage: false,
        tvShowMore: false,
        movieMore: false,
        searchLoad: false,
        movieFavorite:false,
        tvFavorite:false,
    },
    modal: {
        status: false,
        id: '',
        media_type: ''
    }
}



const homeSlice = createSlice({
    name: 'home',
    initialState: initState,
    reducers: {
        clearTvShow: (state) => {
            state.allGenreTvshow = []
        },
        clearMovie: (state) => {
            state.allGenreMovie = []
        },
        getTvshowPage: (state, { payload }) => {
            state.Page.tvShow = payload
        },
        getMoviePage: (state, { payload }) => {
            state.Page.movie = payload
        },
        startLoadingMoviePage: (state) => {
            state.Loading.moviePage = true
        },
        stopLoadingMoviePage: (state) => {
            state.Loading.moviePage = false
        },
        startLoadingTvshowPage: (state) => {
            state.Loading.tvShowPage = true
        },
        stopLoadingTvshowPage: (state) => {
            state.Loading.tvShowPage = false
        },
        startLoadingPopuplar: (state) => {
            state.Loading.popular = true
        },
        stopLoadingPopular: (state) => {
            state.Loading.popular = false
        },
        startLoadingGenreTv: (state) => {
            state.Loading.genreTv = true
        },
        stopLoadingGenreTv: (state) => {
            state.Loading.genreTv = false
        },
        startLoadingGenreMovie: (state) => {
            state.Loading.genreMovie = true
        },
        stopLoadingGenreMovie: (state) => {
            state.Loading.genreMovie = false
        },
        getTvByGenreRequest: () => {
        },
        getTvByGenreSuccess: (state, { payload }) => {
            state.allTvshow = payload
        },
        getMoviesByGenreRequest: () => {
        },
        getMoviesByGenreSuccess: (state, { payload }) => {
            state.allMovie = payload
        },
        getGenresMovieRequest: () => { },
        getGenresTvRequest: () => { },
        getGenresMovieSuccess: (state, { payload }) => {
            state.genresMovie = payload
        },
        getGenresTvSuccess: (state, { payload }) => {
            state.genresTv = payload
        },
        getTrendingTvshowRequest: () => { },
        getTrendingMovieRequest: () => { },
        getTrendingRequest: () => { },
        trendingDataSuccess: (state, { payload }) => {
            state.trending = payload
        },
        tredingTvshowSuccess: (state, { payload }) => {
            state.trendingTvshow = payload
        },
        tredingMovieSuccess: (state, { payload }) => {
            state.trendingMovie = payload
        },
        getTrendingMovieAndTvshowRequest: (state) => {
        },
        getTrendingMovieAndTvshowDataSuccess: (state, { payload }) => {
            state.allMoviesTvshowsTrending = payload
        },
        getGenreMoviesRequest: (state, payload) => { },
        getGenreTvshowsRequest: (state, payload) => { },
        getGenreMoviesSuccess: (state, { payload }) => {
            state.Loading.moviePage = true
            state.allGenreMovie = [...state.allGenreMovie, ...payload]
        },
        getSearchRequest: (state, payload) => { },
        stopSearchLoad: (state) => {
            state.Loading.searchLoad = false
        },
        startSearchLoad: (state) => {
            state.Loading.searchLoad = true
        },
        clearSearchData: (state) => {
            state.search = []
        },
        getSearchSuccess: (state, { payload }) => {
            state.search = [...state.search, ...payload]
        },
        getGenreTvshowsSuccess: (state, { payload }) => {
            state.allGenreTvshow = [...state.allGenreTvshow, ...payload]
        },
        openModal: (state, { payload }) => {
            state.modal.status = true
            state.modal.id = payload.id
            state.modal.media_type = payload.media_type
        },
        closeModal: (state) => {
            state.modal.id = ''
            state.modal.media_type = ''
            state.modal.status = false
        },
        startMovieFavoriteLoad:(state) =>{
            state.Loading.movieFavorite = true
        },
        startTvFavoriteLoad:(state) =>{
            state.Loading.tvFavorite = true
        },
        stopMovieFavoriteLoad:(state) =>{
            state.Loading.movieFavorite = false
        },
        stopTvFavoriteLoad:(state) =>{
            state.Loading.tvFavorite = false
        },
        getMovieFavoriteRequest: (state, payload) => {

        },
        getMovieFavoriteSuccess: (state, { payload }) => {
            state.movieFavorite = [state.movieFavorite, ...payload]
        },
        getTvFavoriteRequest: (state, payload) => {

        },
        getTvFavoriteSuccess: (state, { payload }) => {
            state.tvFavorite = [state.tvFavorite, ...payload]
        }
    }
})

export const homeAction = homeSlice.actions
export const homeReducer = homeSlice.reducer