import React, { useEffect } from 'react'
import AuthMainPage from 'screen/AuthMainPage/Index'
import SignIn from 'screen/LoginPage/Index'
import Home from 'screen/HomePage/Home/Index'
import Footer from 'components/Auth/Footer'
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { RootReducerModel } from 'Redux/rootReducer';
import PrivateRoute from 'components/Home/PrivateRoute';
import { authAction } from 'Redux/authReducer';
import Loading from 'components/Loading'
import Header from 'components/Home/Homeheader'
export default function App() {
    const { isLoggedIn, isLoading ,user} = useSelector((state: RootReducerModel) => state.authReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(authAction.getUser())
    }, [])
    return (
        <div className='wrapper'>
            <Router>
                {isLoggedIn  && user &&  <Header/> }
                {isLoading ?
                    <Loading/> :
                    <Switch>
                        <Route exact path="/" component={AuthMainPage} />
                        <Route exact path="/sign-in" component={SignIn} />
                        <PrivateRoute exact path='/home' component={ user && Home} auth={isLoggedIn} />
                    </Switch>}
            </Router>
            <Footer/>
        </div>
    )
}
