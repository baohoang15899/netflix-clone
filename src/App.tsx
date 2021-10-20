import React, { useEffect } from 'react'
import AuthMainPage from 'screen/AuthMainPage/Index'
import SignIn from 'screen/LoginPage/Index'
import Home from 'screen/HomePage/Home/Index'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { RootReducerModel } from 'Redux/rootReducer';
import PrivateRoute from 'components/Home/PrivateRoute';
import { authAction } from 'Redux/authReducer';
export default function App() {
    const { isLoggedIn } = useSelector((state: RootReducerModel) => state.authReducer)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(authAction.getUser())
    },[])
    return (
        <div className='wrapper'>
            <Router>
                <Switch>
                    <Route exact path="/" component={AuthMainPage} />
                    <Route exact path="/sign-in" component={SignIn} />
                    <PrivateRoute exact path='/home' component={Home} auth={isLoggedIn}/>
                </Switch>
            </Router>
        </div>
    )
}
