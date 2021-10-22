import { createSessionId, getUserDetail, LoginRequest, logOut, validateUsernamePassword } from 'api/Services';
import { ResponseType } from 'axios';
import { takeLatest, call, put, select, take } from 'redux-saga/effects'
import { authAction } from 'Redux/authReducer'

interface Response {
    data?: any,
    status?: number,
    success?: Boolean,
    token?: any
}

function* loginSaga({ payload }: any) {
    yield put(authAction.startDisableBtn())
    try {
        const res: Response = yield call(LoginRequest)
        if (res.status === 200) {
            const token = res.data.request_token
            const resLogin: Response = yield validateUsernamePassword(payload, token)
            if (resLogin?.data?.success === true) {
                yield put(authAction.accountExist())
                const resSession: Response = yield createSessionId(resLogin?.data?.request_token)
                if (resSession?.data?.success === true) {
                    // yield put(authAction.LoginSuccess())
                    yield localStorage.setItem('token', JSON.stringify(resSession?.data?.session_id))
                    yield put(authAction.getUser())
                } else {
                    yield put(authAction.LoginFailed())
                }
            }
            else {
                yield put(authAction.accountNotExist())
                yield put(authAction.LoginFailed())
            }
        }
    } catch (error) {
        console.log(error);
        yield put(authAction.LoginFailed())
    }
    finally {
        yield put(authAction.stopDisableBtn())
    }
}

function* getUserData() {
    yield put(authAction.startLoading())
    const data: string = yield localStorage.getItem('token')
    try {
        if (data) {
            const getUser: Response = yield getUserDetail(JSON.parse(data))
            if (getUser.status === 200) {
                yield put(authAction.LoginSuccess())
                yield put(authAction.getMeRequest(getUser.data))
            }
            else {
                yield put(authAction.LoginFailed())
            }
        }
        else {
            yield put(authAction.LoginFailed())
        }
    } catch (error) {
        console.log(error);
    }
    finally {
        yield put(authAction.stopLoading())
    }
}

function* logOutSaga(){
    yield put(authAction.startLoading())
    const data: string = yield localStorage.getItem('token')
    yield put(authAction.startDisableBtn())
    try {
        if (data) {
            const res:Response =  yield call(logOut,JSON.parse(data))
            if (res.status === 200) {
                yield localStorage.removeItem('token')
                yield put(authAction.logOutSuccess())
            }
        }
    } catch (error) {
        console.log(error);
    }
    finally{
        yield put(authAction.stopDisableBtn())
        yield put(authAction.stopLoading())
    }
}

function* authSaga() {
    yield takeLatest(authAction.LoginRequest, loginSaga)
    yield takeLatest(authAction.getUser, getUserData)
    yield takeLatest(authAction.logOutRequest, logOutSaga)
}

export default authSaga