import axios from 'axios';
import { IcreateSessionService, IloginService } from 'global/Auth/Interfaces';
import NAxios from './AxiosConfig';
import { Urls } from './Urls'
const client_ID = '131c3841b70be2908cf7a3fabcaa002e'

export interface ApiResponse {
    error?: object,
    data?: any
}



export const processRequest = async (request: any) => {
    try {
        const data = await request
        return data
    } catch (error) {
        console.log(error);
        return error
    }
}


export const LoginRequest = async () => {
    const data = NAxios.get(`${Urls.REQUEST_TOKEN}api_key=${client_ID}`)
    return processRequest(data)
}

export const validateUsernamePassword = async (params: IloginService, token: string) => {
    const formData:any = new FormData();
    formData.append('username', params.username)
    formData.append('password', params.password)
    formData.append('request_token', token)
    // for(var pair of formData.entries()) {
    //     console.log(pair[0]+', '+pair[1]);
    //   }    
    return processRequest(NAxios.post(`${Urls.REQUEST_LOGIN}api_key=${client_ID}`,formData))
}

export const createSessionId = async (token:string)=>{
    console.log(token,'token');
    const formData:any = new FormData();
    formData.append('request_token', token)
    return processRequest(NAxios.post(`${Urls.CREATE_SESSION}api_key=${client_ID}`,formData))
}

export const getUserDetail = async(token:string)=>{
    return processRequest(NAxios.get(`${Urls.ACCOUNT}api_key=${client_ID}&session_id=${token}`))
}