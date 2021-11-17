import { getTrendingTvShow } from 'api/Services'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { homeAction } from 'Redux/homeReducer'
import { RootReducerModel } from 'Redux/rootReducer'
import Banner from 'components/Home/Banner'
import ItemBox from 'components/Home/ItemBox'

export default function Index(props: any) {
    const dispatch = useDispatch()
    const trendingShow = useSelector((state: RootReducerModel) => state.homeReducer.trendingTvshow)
    const storeData = useSelector((state: RootReducerModel) => state.homeReducer)
    const { results } = trendingShow
    const { genresTv, allGenreTvshow } = storeData
    useEffect(() => {
        dispatch(homeAction.getTrendingTvshowRequest())
        dispatch(homeAction.getGenreTvshowsRequest({ id: props?.match?.params?.id }))
    }, [])
    return (
        <div className="Tvshow">
            <Banner data={results && results[0]} />
            <div className='Tvshow__wrapper'>
                <div className="container">
                    {
                        genresTv &&
                        <div className="home__category-header">
                            {genresTv.length > 0 &&
                                genresTv.filter(item => item.id == props?.match?.params?.id)[0].name
                            }
                        </div>
                    }
                    {
                        allGenreTvshow &&
                        <div className='MediaWrapper'>
                            {allGenreTvshow.map(item => {
                                if(item.backdrop_path && item.poster_path){
                                    return <ItemBox slide={false} key={item.id} mediaType='tv' data={item} />
                                }
                            })}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
