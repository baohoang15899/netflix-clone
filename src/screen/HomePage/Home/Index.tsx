import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { homeAction } from 'Redux/homeReducer'
import Banner from 'components/Home/Banner'
import { RootReducerModel } from 'Redux/rootReducer'
export default function Index() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(homeAction.getTrendingRequest())
    },[])
    const trendingShow = useSelector((state: RootReducerModel) => state.homeReducer.trending)
    const { results } = trendingShow
    return (
        <div className='home'>
            <Banner
                data={results && results[0]}
            />
        </div>
    )
}
