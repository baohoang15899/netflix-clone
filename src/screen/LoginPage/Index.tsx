import Footer from 'components/Auth/Footer'
import React, { useEffect, useState } from 'react'
import LogoBrand from 'components/Logo'
import Ninput from 'components/Signin/InputLogin'
import ValidateEmail from './CustoomHook/ValidateEmail'
import ValidatePassword from './CustoomHook/ValidatePasswiord'
import { useDispatch, useSelector } from 'react-redux'
import { authAction } from 'Redux/authReducer'
import { RootReducerModel } from 'Redux/rootReducer'
import { Redirect } from 'react-router-dom'

export default function Index(props:any) {
    console.log(props,'test');
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const validateEmail = ValidateEmail(email)
    const validatePassword = ValidatePassword(password)
    const dispatch = useDispatch()
    const { accountExist, isLoggedIn } = useSelector((state: RootReducerModel) => state.authReducer)
    console.log(isLoggedIn, 'authState log in');
    const [checkSubmit, setCheckSubmit] = useState<Boolean>(false)
    const hanldeSubmit = () => {
        if (email.length > 0 && password.length > 0) {
            if (validateEmail && validatePassword) {
                setCheckSubmit(false)
                dispatch(authAction.LoginRequest({ username: email, password: password }))
            }
        }
        else {
            setCheckSubmit(true)
        }
    }
    // const testApi = async() => {
    //     const key ='131c3841b70be2908cf7a3fabcaa002e'
    //     const token = await fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${key}`)
    //     const tokenData = await token.json()
    //     const response = await fetch(`https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${key}`, {
    //         method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             username:email,
    //             password:password,
    //             request_token:tokenData.request_token
    //         }) // body data type must match "Content-Type" header
    //       });
    //     const res = await response.json()
    //     const session = await fetch(`https://api.themoviedb.org/3/authentication/session/new?api_key=131c3841b70be2908cf7a3fabcaa002e`, {
    //         method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             request_token:res.request_token
    //         }) // body data type must match "Content-Type" header
    //       });
    //       const sessData = await session.json()
    //       console.log(sessData);
    //     const testData = await fetch(`https://api.themoviedb.org/3/account?api_key=131c3841b70be2908cf7a3fabcaa002e&session_id=${sessData.session_id}`)
    //     const accData = await testData.json()
    //     console.log(accData,'data data');
    // }

    const handleChangeText = (cb: (e: any) => void, event: any) => {
        cb(event.target.value)
        dispatch(authAction.accountExist())
        setCheckSubmit(false)
        // if (isLoggedIn) {
        //     return <Redirect to={{pathname:'/home'}}/>
        // }
    }
    
    return isLoggedIn ? 
    <Redirect to={{pathname:'/home'}}/> :
    (
        <div className="login">
            <div className="container">
                <div className="login__content">
                    <LogoBrand />
                    <div className="login__content-form">
                        <h6 className="formTitle">Sign In</h6>
                        <Ninput
                            showErr={email.length > 0 && !validateEmail ? 'showErr' : ''}
                            text={email}
                            onChangeText={(e) => handleChangeText(setEmail, e)}
                            placeholder="Username or phone number" />
                        {
                            email.length > 0
                            && !validateEmail &&
                            <p className="login__content-err">
                                Your email is invalid
                            </p>}
                        <Ninput
                            showErr={password.length > 0 && !validatePassword ? 'showErr' : ''}
                            passwordInput={true} text={password}
                            onChangeText={(e) => handleChangeText(setPassword, e)}
                            placeholder="Password" />
                        {password.length > 0
                            && !validatePassword
                            && <p className="login__content-err">
                                Your password is invalid
                            </p>}
                        <div onClick={() => hanldeSubmit()} className="login__content-btn">
                            <p>Sign In</p>
                        </div>
                        {checkSubmit &&
                            <p className="login__content-err"
                                style={{ textAlign: 'center' }}>
                                Do not leave email and password empty</p>
                        }
                        {!accountExist &&
                            <p className="login__content-err"
                                style={{ textAlign: 'center' }}>
                                Your username or password not existed</p>
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
