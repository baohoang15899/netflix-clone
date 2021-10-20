import { createSessionId, getUserDetail, LoginRequest, validateUsernamePassword } from 'api/Services';
import { ResponseType } from 'axios';
import { takeLatest, call, put, select, take } from 'redux-saga/effects'
import {authAction} from 'Redux/authReducer'

interface Response {
    data?:any,
    status?:number,
    success?:Boolean,
    token?:any
}

function* loginSaga({payload}:any){
    yield put(authAction.startLoading())
    try {   
        const res:Response = yield call(LoginRequest)
        if (res.status === 200) {
            const token = res.data.request_token
            const resLogin:Response = yield validateUsernamePassword(payload,token)
            if (resLogin?.data?.success === true) {
                yield put(authAction.accountExist())
                const resSession:Response = yield createSessionId(resLogin?.data?.request_token)
                if(resSession?.data?.success === true){
                    // yield put(authAction.LoginSuccess())
                    yield localStorage.setItem('token',JSON.stringify(resSession?.data?.session_id))
                    yield put(authAction.getUser())
                }else{
                    yield put(authAction.LoginFailed())
                }
            }
            else{
                yield put(authAction.accountNotExist())
                yield put(authAction.LoginFailed())
            }
        }
    } catch (error) {
        console.log(error);
        yield put(authAction.LoginFailed())
    }
    finally{
        yield put(authAction.stopLoading())
    }
} 

function* getUserData(){
    const data:string = yield localStorage.getItem('token') 
    if (data) {
        const getUser:Response = yield getUserDetail(JSON.parse(data))
        console.log(getUser.data,'data');
        
        if (getUser.status === 200) {
            yield put(authAction.LoginSuccess())
            yield put(authAction.getMeRequest(getUser.data))
        }
        else{
            yield put(authAction.LoginFailed())
        }
    }
    else{
        yield put(authAction.LoginFailed())
    }
}

function* authSaga(){
    yield takeLatest(authAction.LoginRequest, loginSaga)
    yield takeLatest(authAction.getUser, getUserData)
}

export default authSaga