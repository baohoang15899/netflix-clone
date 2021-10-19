import { createSessionId, LoginRequest, validateUsernamePassword } from 'api/Services';
import { ResponseType } from 'axios';
import { takeLatest, call, put, select, take } from 'redux-saga/effects'
import {authAction} from 'Redux/authReducer'

interface Response {
    data?:any,
    status?:number,
    success:Boolean
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
                yield localStorage.setItem('token',JSON.stringify(resLogin?.data?.request_token))
                const resSession:Response = yield createSessionId(resLogin?.data?.request_token)
                if(resSession?.data?.success === true){
                    yield put(authAction.LoginSuccess())
                }else{
                    yield put(authAction.LoginFailed())
                }
            }
            else{
                yield put(authAction.accountNotExist())
            }
        }
    } catch (error) {
        console.log(error);
    }
    finally{
        yield put(authAction.stopLoading())
    }
} 

function* authSaga(){
    yield takeLatest(authAction.LoginRequest,loginSaga)
}

export default authSaga