import { UrlImage } from 'api/Urls'
import { IbannerData } from 'global/Home/Interfaces'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootReducerModel } from 'Redux/rootReducer'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faPlay, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

export default function Banner({ data }: IbannerData) {
    return (
        <div className='home__banner'
            style={data && {
                backgroundImage: `
                linear-gradient(
                    0deg,rgba(0,0,0,1) 0,rgba(0,0,0,0) 100%),
                  url(${UrlImage.TRENDING_BACKGROUND}${data.backdrop_path})`
            }}>
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
                            <div className='home__banner-btnTrailer'>
                                <Icon style={{ marginRight: '10px' }} size="sm" icon={faPlay} />
                                <span>Trailer</span>
                            </div>
                            <div className='home__banner-btnDetail'>
                                <Icon style={{ marginRight: '10px' }} size="sm" icon={faExclamationCircle} />
                                <span>More info</span>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
