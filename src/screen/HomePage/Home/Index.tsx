import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { homeAction } from 'Redux/homeReducer'
import Banner from './Banner'
export default function Index() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(homeAction.getTrendingRequest())
    },[])
    return (
        <div className='home'>
            <Banner/>
        </div>
    )
}
