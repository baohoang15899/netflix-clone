import { getTrendingData } from 'api/Services'
import { takeLatest, call, put, select, take } from 'redux-saga/effects'
import { homeAction } from 'Redux/homeReducer'

interface Response{
    data?:any,
    status?:number
}

function* getTrending(){
    try {
        const res:Response = yield call(getTrendingData)
        if (res?.status === 200) {
            yield put(homeAction.trendingDataSuccess(res.data))   
        }
    } catch (error) {
        
    }
}

function* homeSaga(){
    yield takeLatest(homeAction.getTrendingRequest,getTrending)
}

export default homeSaga