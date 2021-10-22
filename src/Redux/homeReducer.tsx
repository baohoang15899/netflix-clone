import { createSlice, configureStore } from '@reduxjs/toolkit'
import { IhomeReducer } from 'global/Home/Interfaces'

const initState:IhomeReducer = {
    trending:{}
}

const homeSlice = createSlice({
    name:'home',
    initialState: initState,
    reducers:{
        getTrendingRequest:()=>{},
        trendingDataSuccess:(state,{payload})=>{
            state.trending = payload
        }
    }
})

export const homeAction = homeSlice.actions
export const homeReducer = homeSlice.reducer