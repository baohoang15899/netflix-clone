import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { RootReducerModel } from 'Redux/rootReducer'
import Banner from './banner'
import Content from './Content'
import Question from './Question'
import Footer from 'components/Auth/Footer'
export default function Index() {
    const { isLoggedIn } = useSelector((state: RootReducerModel) => state.authReducer)
    if (isLoggedIn) return <Redirect to={{pathname:'/home'}}/> 
    return (
        <>
            <Banner/>
            <Content/>
            <Question/>
        </>
    )
}
