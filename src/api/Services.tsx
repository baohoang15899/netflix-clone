import axios from 'axios';
import { IcreateSessionService, IloginService } from 'global/Auth/Interfaces';
import { IdataResults, IgenreData } from 'global/Home/Interfaces';
import NAxios from './AxiosConfig';
import { Urls } from './Urls'
const client_ID = '131c3841b70be2908cf7a3fabcaa002e'

export interface ApiResponse {
    error?: object,
    data?: any,
    status?:number
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

export const getAllRequest = async (requests: any) => {
    try {
        const values = await Promise.all(requests);
        return { movies: values[0], tvShows: values[1] };
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const LoginRequest = () => {
    const data = NAxios.get(`${Urls.REQUEST_TOKEN}api_key=${client_ID}`)
    return processRequest(data)
}

export const validateUsernamePassword = (params: IloginService, token: string) => {
    const formData: any = new FormData();
    formData.append('username', params.username.trim())
    formData.append('password', params.password.trim())
    formData.append('request_token', token)
    // for(var pair of formData.entries()) {
    //     console.log(pair[0]+', '+pair[1]);
    //   }    
    return processRequest(NAxios.post(`${Urls.REQUEST_LOGIN}api_key=${client_ID}`, formData))
}

export const createSessionId = (token: string) => {
    const formData: any = new FormData();
    formData.append('request_token', token)
    return processRequest(NAxios.post(`${Urls.CREATE_SESSION}api_key=${client_ID}`, formData))
}

export const getUserDetail = (token: string) => {
    return processRequest(NAxios.get(`${Urls.ACCOUNT}api_key=${client_ID}&session_id=${token}`))
}

export const getTrendingData = () => {
    return processRequest(NAxios.get(`${Urls.TRENDING}api_key=${client_ID}`))
}

export const logOut = (session_id: string) => {
    const formData: any = new FormData()
    formData.append("session_id", session_id)
    return processRequest(NAxios.delete(`${Urls.LOG_OUT}api_key=${client_ID}`, { data: formData }))
}

export const allMovieRequest = () => {
    const movieUrl = NAxios.get(`${Urls.MOVIE_POPULAR}api_key=${client_ID}`)
    const tvUrl = NAxios.get(`${Urls.TV_POPULAR}api_key=${client_ID}`)
    const arrRequest = [movieUrl, tvUrl]
    return getAllRequest(arrRequest)
}

export const getGenresMovieRequest = () =>{
    return processRequest(NAxios.get(`${Urls.GENRE_MOVIE}api_key=${client_ID}`))
}

export const getGenresTvRequest = () =>{
    return processRequest(NAxios.get(`${Urls.GENRE_TV}api_key=${client_ID}`))
}

export const getMovieDetail = async(id:string,cb:(e:any)=>void,connect:(e:Boolean)=>void) =>{
    try {
        const [info,crew] = await Promise.all([
            NAxios.get(`${Urls.MOVIE_DETAIL}${id}?api_key=${client_ID}`),
            NAxios.get(`${Urls.MOVIE_DETAIL}${id}/credits?api_key=${client_ID}`)
        ])
        const detail:ApiResponse = info
        const actors:ApiResponse = crew
        cb({...detail.data,...actors.data})
        connect(true)
    } catch (error) {
        console.log(error);
        connect(false)
    }
}

export const getRecommendShow = async(id:any,type:string,cb:(e:Boolean)=>void,cbdata:(e:any)=>void) =>{
    try {
        let url:ApiResponse
        if (type === 'tv') {
            url = await NAxios.get(`${Urls.TV_DETAIL}${id}/recommendations?api_key=${client_ID}`)
            if (url.status === 200) {
                cbdata(url.data.results)
                cb(true)
            }
            else{
                cb(false)
            }
        }
        else if (type === 'movie'){
            url = await NAxios.get(`${Urls.MOVIE_DETAIL}${id}/recommendations?api_key=${client_ID}`)
            if (url.status === 200) {
                cbdata(url.data.results)
                cb(true)
            }
            else{
                cb(false)
            }
        }
    } catch (error) {
        console.log(error);
        cb(false)
    }
}

export const getTvDetail = async(id:string,cb:(e:any)=>void,connect:(e:Boolean)=>void) =>{
    try {
        const [info,crew] = await Promise.all([
            NAxios.get(`${Urls.TV_DETAIL}${id}?api_key=${client_ID}`),
            NAxios.get(`${Urls.TV_DETAIL}${id}/credits?api_key=${client_ID}`)
        ])
        const detail:ApiResponse = info
        const actors:ApiResponse = crew
        cb({...detail.data,...actors.data})
        connect(true)
    } catch (error) {
        console.log(error);
        connect(false)
    }
}

export const getMovieByGenreRequest = async() => {
    const genres:ApiResponse = await getGenresMovieRequest()
    const data:Array<IdataResults> = []
    if (genres.status === 200) {
        for (let i = 2; i < 8; i++) {
            const singleMovie:ApiResponse = await processRequest(NAxios.get(`${Urls.MOVIE_BY_GENRE}api_key=${client_ID}&language=en-US&sort_by=popularity.desc&page=1&with_genres=${genres.data.genres[i].id}`))
            if (singleMovie.status === 200) {
                const movieData:any = {genre:genres.data.genres[i].name,...singleMovie.data}
                data.push(movieData)
            }
        }
    }
    return data 
}

export const getTvByGenreRequest = async() => {
    const genres:ApiResponse = await getGenresTvRequest()
    const data:Array<IdataResults> = []
    if (genres.status === 200) {
        for (let i = 0; i < 8; i++) {
            const singleTv:ApiResponse = await processRequest(NAxios.get(`${Urls.TV_BY_GENRE}api_key=${client_ID}&language=en-US&sort_by=popularity.desc&page=1&with_genres=${genres.data.genres[i].id}`))
            if (singleTv.status === 200) {
                const tvData:any = {genre:genres.data.genres[i].name,...singleTv.data}
                data.push(tvData)
            }
        }
    }
    return data 
}