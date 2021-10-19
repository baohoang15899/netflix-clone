import { createSlice, configureStore } from '@reduxjs/toolkit'
import { IauthReducer } from 'global/Auth/Interfaces'

const initState: IauthReducer = {
    isLoggedIn: false,
    isLoading: false,
    user: null,
    accountExist:true,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initState,
    reducers: {
        LoginRequest: (state,payload) => {},
        LoginSuccess:(state)=>{
            state.isLoggedIn = true
        },
        LoginFailed:(state)=>{
            state.isLoggedIn = false
        },
        startLoading: (state) => {
            state.isLoading = true
        },
        stopLoading: (state) => {
            state.isLoading = false
        },
        getMeRequest: (state, { payload }) => {
            state.user = payload
        },
        accountNotExist:(state) =>{
            state.accountExist = false
        },
        accountExist:(state) =>{
            state.accountExist = true
        }
    }
})

export const authAction = authSlice.actions
export const authReducer = authSlice.reducer