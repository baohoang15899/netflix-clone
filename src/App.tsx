import React from 'react'
import AuthMainPage from 'screen/AuthMainPage/index'
import Auth from 'navigation/Auth/Index'
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default function App() {
    return (
        <div className='wrapper'>
            <Router>
                <Switch>
                    <Auth />
                </Switch>
            </Router>
        </div>
    )
}
