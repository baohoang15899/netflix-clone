import { createSlice, configureStore } from '@reduxjs/toolkit'
import { IdataResults, IhomeReducer } from 'global/Home/Interfaces'

const initState:IhomeReducer = {
    trending:{},
    allMoviesTvshowsTrending:{
        movies:{},
        tvShows:{}
    },
    genresTv:[],
    genresMovie:[],
    allMovie:[],
    allTvshow:[],
    Loading:{
        trending:false,
        popular:false,
        genreTv:false,
        genreMovie:false
    }

}



const homeSlice = createSlice({
    name:'home',
    initialState: initState,
    reducers:{
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
            state.genresMovie = payload
        },
        getTrendingRequest:()=>{},
        trendingDataSuccess:(state,{payload})=>{
            state.trending = payload
        },
        getTrendingMovieAndTvshowRequest:(state)=>{
        },
        getTrendingMovieAndTvshowDataSuccess:(state,{payload})=>{
            state.allMoviesTvshowsTrending = payload
        }
    }
})

export const homeAction = homeSlice.actions
export const homeReducer = homeSlice.reducer