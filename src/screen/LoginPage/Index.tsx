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

export default function Index(props: any) {
    const [email, setEmail] = useState<string>(props?.location?.state ? props?.location?.state : '')
    const [password, setPassword] = useState<string>('')
    const validateEmail = ValidateEmail(email)
    const validatePassword = ValidatePassword(password)
    const [policy, setPolicy] = useState<Boolean>(false)
    const dispatch = useDispatch()
    const { accountExist, isLoggedIn, btnDisable } = useSelector((state: RootReducerModel) => state.authReducer)
    const [checkSubmit, setCheckSubmit] = useState<Boolean>(false)

    const clientLoginCheck = () => {
        if (email.length > 0 && password.length > 0) {
            if (validateEmail && validatePassword) {
                setCheckSubmit(false)
                dispatch(authAction.LoginRequest({ username: email, password: password }))
                return true
            }
            else {
                setCheckSubmit(true)
                return false
            }
        }
        else {
            setCheckSubmit(true)
            return false
        }
    }

    const hanldeSubmit = () => {
        clientLoginCheck()
    }

    useEffect(() => {
        return () => {
            dispatch(authAction.accountExist())
        }
    }, [])

    const handleChangeText = (cb: (e: any) => void, event: any) => {
        cb(event.target.value.trim())
        dispatch(authAction.accountExist())
        setCheckSubmit(false)
    }

    const handleKeyPress = (e: any) => {
        if (e.code === "Enter") {
            clientLoginCheck()
        }
    }

    return isLoggedIn ?
        <Redirect to={{ pathname: '/home' }} /> :
        (
            <div className="login">
                <div className="container">
                    <div className="login__content">
                        <LogoBrand />
                        <div className="login__content-form">
                            <h6 className="formTitle">Sign In</h6>
                            <Ninput
                                onKeyDown={(e) => !btnDisable && handleKeyPress(e)}
                                value={email}
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
                                onKeyDown={(e) => !btnDisable && handleKeyPress(e)}
                                value={password}
                                showErr={password.length > 0 && !validatePassword ? 'showErr' : ''}
                                passwordInput={true} text={password}
                                onChangeText={(e) => handleChangeText(setPassword, e)}
                                placeholder="Password" />
                            {password.length > 0
                                && !validatePassword
                                && <p className="login__content-err">
                                    Your password is invalid
                                </p>}
                            <div onClick={() => !btnDisable && hanldeSubmit()}
                                className={btnDisable ? "login__content-btn disable" : "login__content-btn"}>
                                <p className={btnDisable ? 'disable' : ''}>Sign In</p>
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
                            <p className="login__content-register">
                                New to Netflix?
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.themoviedb.org/signup">
                                    Sign up now.
                                </a>
                            </p>
                            <p className="login__content-more">This page is protected by Google reCAPTCHA to ensure you\'re not a bot.{!policy && <span onClick={() => setPolicy(true)}>Learn more .</span>}</p>
                            <p className={policy ? "login__content-policy show" : "login__content-policy"}>The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
}
