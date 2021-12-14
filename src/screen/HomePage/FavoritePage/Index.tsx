import { getFavorite } from 'api/Services'
import { ImovieDetail, ItvDetail } from 'global/Home/Interfaces'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { homeAction } from 'Redux/homeReducer'
import { RootReducerModel } from 'Redux/rootReducer'

export default function Index() {
    const [index, setIndex] = useState<string>('1')
    const user = useSelector((state: RootReducerModel) => state.authReducer.user)
    const dispatch = useDispatch()
    const [page, setPage] = useState<number>(1)
    const handleClick = (e: any) => {
        setIndex(e.target.id)
        setPage(1)
        window.scrollTo(0,0)
    }

    useEffect(() => {
        window.scrollTo(0,0)
        dispatch(homeAction.getMovieFavoriteRequest(
            { type: 'movies', account_id: user.id, page: page }
        ))
        dispatch(homeAction.getTvFavoriteRequest(
            { type: 'tv', account_id: user.id, page: page }
        ))
    }, [])

    return (
        <div className='favorite'>
            <div className="container">
                <div className='favorite__tab'>
                    <span
                        id='1'
                        onClick={(e: any) => handleClick(e)}
                        className={index === '1'
                            ?
                            'favorite__tab-movie add'
                            :
                            'favorite__tab-movie'}>Movie</span>
                    <span
                        id='2'
                        onClick={(e: any) => handleClick(e)}
                        className={index === '2'
                            ?
                            'favorite__tab-tv add'
                            :
                            'favorite__tab-tv'}>Tvshow</span>
                </div>
                <div className='favorite__content'>
                    {

                    }
                </div>
            </div>
        </div>
    )
}
