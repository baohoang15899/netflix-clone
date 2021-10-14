import React from 'react'
import AuthMainPage from 'screen/AuthMainPage/index'
import SignIn from 'screen/LoginPage/Index'
import { Route } from 'react-router'
export default function Index() {
    return (
        <>
            <Route exact path="/" component={AuthMainPage} />
            <Route exact path="/sign-in" component={SignIn} />
        </>
    )
}
