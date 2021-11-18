import { createSlice, configureStore } from '@reduxjs/toolkit'
import { IdataResults, IhomeReducer } from 'global/Home/Interfaces'

const initState:IhomeReducer = {
    trending:{},
    allMoviesTvshowsTrending:{
        movies:{},
        tvShows:{}
    },
    allGenreMovie:[],
    allGenreTvshow:[],
    trendingTvshow:{},
    trendingMovie:{},
    genresTv:[],
    genresMovie:[],
    allMovie:[],
    allTvshow:[],
    Page:{
        tvShow:0,
        movie:0
    },
    Loading:{
        trending:false,
        popular:false,
        genreTv:false,
        genreMovie:false,
        moviePage:false,
        tvShowPage:false,
        tvShowMore:false,
        movieMore:false
    }
}



const homeSlice = createSlice({
    name:'home',
    initialState: initState,
    reducers:{
        clearTvShow:(state)=>{
            state.allGenreTvshow = []
        },
        clearMovie:(state)=>{
            state.allGenreMovie = []
        },
        getTvshowPage:(state,{payload})=>{
            state.Page.tvShow = payload
        },
        getMoviePage:(state,{payload})=>{
            state.Page.movie = payload
        },
        startLoadingMoviePage:(state)=>{
            state.Loading.moviePage = true
        },
        stopLoadingMoviePage:(state)=>{
            state.Loading.moviePage = false
        },
        startLoadingTvshowPage:(state)=>{
            state.Loading.tvShowPage = true
        },
        stopLoadingTvshowPage:(state)=>{
            state.Loading.tvShowPage = false
        },
        startLoadingPopuplar:(state)=>{
            state.Loading.popular = true
        },
        stopLoadingPopular:(state)=>{
            state.Loading.popular = false
        },
        startLoadingGenreTv:(state)=>{
            state.Loading.genreTv = true
        },
        stopLoadingGenreTv:(state)=>{
            state.Loading.genreTv = false
        },
        startLoadingGenreMovie:(state)=>{
            state.Loading.genreMovie = true
        },
        stopLoadingGenreMovie:(state)=>{
            state.Loading.genreMovie = false
        },
        getTvByGenreRequest:()=>{
        },
        getTvByGenreSuccess:(state,{payload})=>{
            state.allTvshow = payload
        },
        getMoviesByGenreRequest:()=>{
        },
        getMoviesByGenreSuccess:(state,{payload})=>{
            state.allMovie = payload
        },
        getGenresMovieRequest:()=>{},
        getGenresTvRequest:()=>{},
        getGenresMovieSuccess:(state,{payload})=>{
            state.genresMovie = payload
        },
        getGenresTvSuccess:(state,{payload})=>{
            state.genresTv = payload
        },
        getTrendingTvshowRequest:()=>{},
        getTrendingMovieRequest:()=>{},
        getTrendingRequest:()=>{},
        trendingDataSuccess:(state,{payload})=>{
            state.trending = payload
        },
        tredingTvshowSuccess:(state,{payload})=>{
            state.trendingTvshow = payload
        },
        tredingMovieSuccess:(state,{payload})=>{
            state.trendingMovie = payload
        },
        getTrendingMovieAndTvshowRequest:(state)=>{
        },
        getTrendingMovieAndTvshowDataSuccess:(state,{payload})=>{
            state.allMoviesTvshowsTrending = payload
        },
        getGenreMoviesRequest:(state,payload) => {},
        getGenreTvshowsRequest:(state,payload) => {},
        getGenreMoviesSuccess:(state,{payload})=>{
            state.Loading.moviePage = true
            state.allGenreMovie = [...state.allGenreMovie,...payload]
        },
        getGenreTvshowsSuccess:(state,{payload})=>{
            state.Loading.tvShowMore = true
            state.allGenreTvshow = [...state.allGenreTvshow,...payload]
        }
    }
})

export const homeAction = homeSlice.actions
export const homeReducer = homeSlice.reducer