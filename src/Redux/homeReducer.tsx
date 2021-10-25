import { createSlice, configureStore } from '@reduxjs/toolkit'
import { IhomeReducer } from 'global/Home/Interfaces'

const initState:IhomeReducer = {
    trending:{},
    allMoviesTvshowsTrending:{
        movies:[],
        tvShows:[]
    }
}

const homeSlice = createSlice({
    name:'home',
    initialState: initState,
    reducers:{
        getTrendingRequest:()=>{},
        trendingDataSuccess:(state,{payload})=>{
            state.trending = payload
        },
        getTrendingMovieAndTvshowRequest:()=>{},
        getTrendingMovieAndTvshowDataSuccess:(state,{payload})=>{
            state.allMoviesTvshowsTrending = payload
        }
    }
})

export const homeAction = homeSlice.actions
export const homeReducer = homeSlice.reducer