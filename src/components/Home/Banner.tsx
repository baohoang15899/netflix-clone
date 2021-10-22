import { UrlImage } from 'api/Urls'
import { IbannerData } from 'global/Home/Interfaces'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootReducerModel } from 'Redux/rootReducer'

export default function Banner({data}:IbannerData) {
    return (
        <div className='home__banner'
            style={data && { backgroundImage: `url(${UrlImage.TRENDING_BACKGROUND}${data.backdrop_path})` }}>
            {
                data &&
                <div className='home__banner-content'>
                    <div className="container">
                        <h6 className='home__banner-title'>
                            {data.media_type === 'tv' ?
                                data.name :
                                data.title}
                        </h6>
                        <p className='home__banner-overview'>
                            {data.overview && data.overview}
                        </p>
                        <div className='home__banner-btnGroup'>
                            <span>Trailer</span>
                            <span>Detail</span>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
