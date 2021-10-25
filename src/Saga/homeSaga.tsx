import { allMovieRequest, getTrendingData } from 'api/Services'
import { takeLatest, call, put, select, take } from 'redux-saga/effects'
import { homeAction } from 'Redux/homeReducer'

interface Response {
    data?: any,
    status?: number
}

interface MoviesAndTvshows{
    movies?:Response,
    tvShows?:Response
}

function* getTrending() {
    try {
        const res: Response = yield call(getTrendingData)
        if (res?.status === 200) {
            yield put(homeAction.trendingDataSuccess(res.data))
        }
    } catch (error) {
        console.log(error);
    }
}

function* getMovieandTvTrending() {
    try {
        const res: MoviesAndTvshows = yield call (allMovieRequest)
        if (res.movies?.status === 200 && res.tvShows?.status === 200) {
            const data:Object = {
                movies:res.movies.data,
                tvShows:res.tvShows.data
            }
            yield put(homeAction.getTrendingMovieAndTvshowDataSuccess(data))
        }
    } catch (error) {
        console.log(error);

    }
}

function* homeSaga() {
    yield takeLatest(homeAction.getTrendingRequest, getTrending)
    yield takeLatest(homeAction.getTrendingMovieAndTvshowRequest, getMovieandTvTrending)
}

export default homeSaga