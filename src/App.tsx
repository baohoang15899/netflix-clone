import React, { useEffect, useState} from 'react'
import AuthMainPage from 'screen/AuthMainPage/Index'
import SignIn from 'screen/LoginPage/Index'
import Home from 'screen/HomePage/Home/Index'
import Modal from 'screen/HomePage/DetailModal/Index'
import Footer from 'components/Auth/Footer'
import {
    Switch,
    Route,
    useLocation
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { RootReducerModel } from 'Redux/rootReducer';
import PrivateRoute from 'components/Home/PrivateRoute';
import { authAction } from 'Redux/authReducer';
import Loading from 'components/Loading'
import Header from 'components/Home/Homeheader'
import TvShow from 'screen/HomePage/Tvshow/Index'
import Movie from 'screen/HomePage/MoviePage/Index'
import Search from 'screen/HomePage/SearchPage/Index'
import Favorite from 'screen/HomePage/FavoritePage/Index'
import { homeAction } from 'Redux/homeReducer'
import TrailerModal from 'screen/HomePage/TrailerModal/Index'
import Account from 'screen/HomePage/AccountDetail/Index'
import NotFound from 'screen/NotFound/Index'
import { getCookie } from 'global/CookieConfig'
interface IstateLocation {
    background?: any
}

export default function App() {
    const { isLoggedIn, isLoading, user } = useSelector((state: RootReducerModel) => state.authReducer)
    const dispatch = useDispatch()
    const location = useLocation<IstateLocation>()

    useEffect(() => {
        dispatch(authAction.getUser())
    }, [])

    useEffect(() => {
        if (isLoggedIn) {
            dispatch(homeAction.getGenresMovieRequest())
            dispatch(homeAction.getGenresTvRequest())
        }
    }, [isLoggedIn])

    let background = location?.state && location.state.background

    return (
        <div className='wrapper'>
            {isLoggedIn && user && <Header background = {background}/>}
            {isLoggedIn && <TrailerModal/>}
            {isLoading ?
                <Loading /> :
                <>
                    <Switch location={background || location} >
                        <Route exact path="/" component={AuthMainPage} />
                        <Route exact path="/sign-in" component={SignIn} />
                        <PrivateRoute path='/home' component={user && Home} auth={isLoggedIn} />
                        <PrivateRoute path='/tvshow/:id' component={user && TvShow} auth={isLoggedIn} />
                        <PrivateRoute path='/movie/:id' component={user && Movie} auth={isLoggedIn} />
                        <PrivateRoute path='/search/:keyword' component={user && Search} auth={isLoggedIn} />
                        <PrivateRoute path='/favorite' component={user && Favorite} auth={isLoggedIn} />
                        <PrivateRoute path='/account' component={user && Account} auth={isLoggedIn} />
                        <Route path='*' exact={true} component={NotFound} />
                    </Switch>
                    {!background &&
                        <Switch>
                            <PrivateRoute path='/home/:type/:id' component={Modal} auth={isLoggedIn} />
                        </Switch>
                    }
                </>
            }
            {background &&
                <PrivateRoute
                    path='/home/:type/:id'
                    auth={isLoggedIn}
                    component={(props: any) => <Modal key={window.location.hash} {...props} />} />}
            <Footer />
        </div>
    )
}
