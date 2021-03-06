import {IloginService } from 'global/Auth/Interfaces';
import { getCookie } from 'global/CookieConfig';
import { IdataResults, ImarkFavorite, ImediaState, Ivideo } from 'global/Home/Interfaces';
import NAxios from './AxiosConfig';
import { Urls } from './Urls'
const client_ID = process.env.REACT_APP_CLIENT_KEY

export interface ApiResponse {
    error?: object,
    data?: any,
    status?: number
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

export const getTrendingTvShow = () => {
    return processRequest(NAxios.get(`${Urls.TRENDING_TVSHOW}api_key=${client_ID}`))
}

export const getTrendingMovie = () => {
    return processRequest(NAxios.get(`${Urls.TRENDING_MOVIE}api_key=${client_ID}`))
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

export const getGenresMovieRequest = () => {
    return processRequest(NAxios.get(`${Urls.GENRE_MOVIE}api_key=${client_ID}`))
}

export const getGenresTvRequest = () => {
    return processRequest(NAxios.get(`${Urls.GENRE_TV}api_key=${client_ID}`))
}

export const getTvShowByGenre = ({ id, page }: any) => {
    return processRequest(NAxios.get(`${Urls.TV_BY_GENRE}api_key=${client_ID}&with_genres=${id}&page=${page}`))
}

export const getMovieByGenre = ({ id, page }: any) => {
    return processRequest(NAxios.get(`${Urls.MOVIE_BY_GENRE}api_key=${client_ID}&with_genres=${id}&page=${page}`))
}


export const getMovieDetail = async (id: string, cb: (e: any) => void, connect: (e: Boolean) => void, load: (e: Boolean) => void) => {
    load(true)
    try {
        const [info, crew] = await Promise.all([
            NAxios.get(`${Urls.MOVIE_DETAIL}${id}?api_key=${client_ID}`),
            NAxios.get(`${Urls.MOVIE_DETAIL}${id}/credits?api_key=${client_ID}`)
        ])
        const detail: ApiResponse = info
        const actors: ApiResponse = crew
        cb({ ...detail.data, ...actors.data })
        connect(true)
    } catch (error) {
        console.log(error);
        connect(false)
    }
    finally {
        load(false)
    }
}

export const getRecommendShow = async (id: any, type: string, cb: (e: Boolean) => void, cbdata: (e: any) => void, load: (e: Boolean) => void) => {
    load(true)
    try {
        let url: ApiResponse
        if (type === 'tv') {
            url = await NAxios.get(`${Urls.TV_DETAIL}${id}/recommendations?api_key=${client_ID}`)
            if (url.status === 200) {
                cbdata(url.data.results)
                cb(true)
            }
            else {
                cb(false)
            }
        }
        else if (type === 'movie') {
            url = await NAxios.get(`${Urls.MOVIE_DETAIL}${id}/recommendations?api_key=${client_ID}`)
            if (url.status === 200) {
                cbdata(url.data.results)
                cb(true)
            }
            else {
                cb(false)
            }
        }
    } catch (error) {
        console.log(error);
        cb(false)
    }
    finally {
        load(false)
    }
}

export const getTvDetail = async (id: string, cb: (e: any) => void, connect: (e: Boolean) => void, load: (e: Boolean) => void) => {
    load(true)
    try {
        const [info, crew] = await Promise.all([
            NAxios.get(`${Urls.TV_DETAIL}${id}?api_key=${client_ID}`),
            NAxios.get(`${Urls.TV_DETAIL}${id}/credits?api_key=${client_ID}`)
        ])
        const detail: ApiResponse = info
        const actors: ApiResponse = crew
        cb({ ...detail.data, ...actors.data })
        connect(true)
    } catch (error) {
        console.log(error);
        connect(false)
    }
    finally {
        load(false)
    }
}

export const getMovieByGenreRequest = async () => {
    const genres: ApiResponse = await getGenresMovieRequest()
    const data: Array<IdataResults> = []
    if (genres.status === 200) {
        for (let i = 2; i < 8; i++) {
            const singleMovie: ApiResponse = await processRequest(NAxios.get(`${Urls.MOVIE_BY_GENRE}api_key=${client_ID}&language=en-US&sort_by=popularity.desc&page=1&with_genres=${genres.data.genres[i].id}`))
            if (singleMovie.status === 200) {
                const movieData: any = { genre: genres.data.genres[i].name, ...singleMovie.data }
                data.push(movieData)
            }
        }
    }
    return data
}

export const getSearchData = ({ query, page }: any) => {
    return processRequest(NAxios.get(`${Urls.SEARCH}api_key=${client_ID}&query=${query}&page=${page}`))
}

export const getTvByGenreRequest = async () => {
    const genres: ApiResponse = await getGenresTvRequest()
    const data: Array<IdataResults> = []
    if (genres.status === 200) {
        for (let i = 0; i < 8; i++) {
            const singleTv: ApiResponse = await processRequest(NAxios.get(`${Urls.TV_BY_GENRE}api_key=${client_ID}&language=en-US&sort_by=popularity.desc&page=1&with_genres=${genres.data.genres[i].id}`))
            if (singleTv.status === 200) {
                const tvData: any = { genre: genres.data.genres[i].name, ...singleTv.data }
                data.push(tvData)
            }
        }
    }
    return data
}

export const getVideo = async (id: string, media_type: string, cb?: (e: Boolean) => void, cbData?: (e: Ivideo) => void) => {
    const data: ApiResponse = await processRequest(NAxios.get(`${media_type}/${id}/videos?api_key=${client_ID}`))
    cb && cb(true)
    if (data.status === 200) {
        cbData && cbData(data.data)
        cb && cb(false)
    }
    else {
        cb && cb(false)
        return
    }
}

export const markFavorite = async ({ media_type, media_id, favorite, account_id }: ImarkFavorite) => {
    const session_id = getCookie('token')
    try {
        if (session_id) {
            const data = await processRequest(NAxios.post(`account/${account_id}/favorite?api_key=${client_ID}&session_id=${session_id}`,
                {
                    'media_type': media_type.trim(),
                    'media_id': media_id,
                    'favorite': favorite
                }))
            return data
        }
    } catch (error) {
        console.log(error);
    }
}

export const mediaState = async (media_type: string, media_id: number, cb: (e: ImediaState) => void) => {
    const session_id = getCookie('token')
    if (session_id) {
        const data: ApiResponse = await processRequest(NAxios.get(`${media_type}/${media_id}/account_states?api_key=${client_ID}&session_id=${session_id}`))
        if (data.status === 200) {
            cb(data.data)
        }
    }
}

export const getFavorite = async ({ type, account_id, page }: any) => {
    const token = getCookie('token')
    if (token) {
        const data = await processRequest(NAxios.get(`account/${account_id}/favorite/${type}?api_key=${client_ID}&session_id=${token}&sort_by=created_at.desc&page=${page}`))
        return data
    }
}

export const getRated = async ({ type, account_id, page }: any) => {
    const token = getCookie('token')
    if (token) {
        const data = await processRequest(NAxios.get(`account/${account_id}/rated/${type}?api_key=${client_ID}&session_id=${token}&sort_by=created_at.desc&page=${page}`))
        return data
    }
}


export const getUpcoming = async () => {
    const data = await processRequest(NAxios.get(`movie/upcoming?api_key=${client_ID}&page=1`))
    return data
}

export const rateMedia = async (media_type: string, media_id: number, value: number, cb: (e: boolean) => void) => {
    const token = getCookie('token')
    cb(true)
    try {
        if (token) {
            await processRequest(NAxios.post(`${media_type}/${media_id}/rating?api_key=${client_ID}&session_id=${token}`,
                {
                    'value': value
                }))
        }
    } catch (error) {
        console.log(error);
    }
    finally {
        cb(false)
    }
}

export const ratingDelete = async (media_type: string, media_id: number) => {
    const token = getCookie('token')
    try {
        if (token) {
            await processRequest(NAxios.delete(`${media_type}/${media_id}/rating?api_key=${client_ID}&session_id=${token}`))
        }
    } catch (error) {
        console.log(error);
    }
}