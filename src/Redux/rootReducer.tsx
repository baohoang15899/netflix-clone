import { configureStore } from '@reduxjs/toolkit'
import { IauthReducer } from 'global/Auth/Interfaces'
import {authReducer} from './authReducer'

export interface RootReducerModel {
    authReducer: IauthReducer,
  }
  

const allReducer = {
    authReducer
}


export default allReducer