import { IauthReducer } from 'global/Auth/Interfaces'
import { IhomeReducer } from 'global/Home/Interfaces'
import { authReducer } from './authReducer'
import { homeReducer } from './homeReducer'

export interface RootReducerModel {
    authReducer: IauthReducer,
    homeReducer: IhomeReducer
}


const allReducer = {
    authReducer,
    homeReducer
}


export default allReducer