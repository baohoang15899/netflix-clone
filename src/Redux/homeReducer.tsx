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
            const filter = state.allGenreMovie.filter((item,index)=> item.id !== payload[index].id)
            console.log(filter,'fil');
            state.allGenreMovie = [...state.allGenreMovie,...payload]
        },
        getGenreTvshowsSuccess:(state,{payload})=>{
            if (state.allGenreTvshow.length > 0) {
                state.allGenreTvshow = [
                    ...state.allGenreTvshow,
                    ...state.allGenreTvshow.filter((item,index)=> item.id !== payload[index].id)
                ]
            }else{
                state.allGenreTvshow = [...state.allGenreTvshow,...payload]
            }
        }
    }
})

export const homeAction = homeSlice.actions
export const homeReducer = homeSlice.reducer