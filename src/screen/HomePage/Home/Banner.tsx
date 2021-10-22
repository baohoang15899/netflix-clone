import { UrlImage } from 'api/Urls'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootReducerModel } from 'Redux/rootReducer'

export default function Banner() {
    const trendingShow = useSelector((state:RootReducerModel) => state.homeReducer.trending)
    const {results} = trendingShow
    return (
        <div className='home__banner' 
        style={results && { backgroundImage: `url(${UrlImage.TRENDING_BACKGROUND}${results[0].backdrop_path})`} }>
            {
                // results && 
                // <p>{results[0].id} adad</p>
            }
        </div>
    )
}
