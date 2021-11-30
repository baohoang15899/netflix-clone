import { getTrendingTvShow } from 'api/Services'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { homeAction } from 'Redux/homeReducer'
import { RootReducerModel } from 'Redux/rootReducer'
import Banner from 'components/Home/Banner'
import ItemBox from 'components/Home/ItemBox'
import SkeletonLoading from 'components/Home/SkeletonLoading'
import ObserveIntersection from 'global/ObserveIntersection'

export default function Index(props: any) {
    const dispatch = useDispatch()
    const trendingShow = useSelector((state: RootReducerModel) => state.homeReducer.trendingTvshow)
    const storeData = useSelector((state: RootReducerModel) => state.homeReducer)
    const { results } = trendingShow
    const { genresTv, allGenreTvshow } = storeData
    const [lastElement, setLastElement] = useState<any>()
    const loading = useSelector((state: RootReducerModel) => state.homeReducer.Loading.tvShowPage)
    const idRef = useRef(props?.match?.params?.id)

    const page = ObserveIntersection(lastElement, loading)

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(homeAction.getTrendingTvshowRequest())
        dispatch(homeAction.clearTvShow())
        return () => {
            dispatch(homeAction.clearTvShow())
        }
    }, [])

    useEffect(() => {
        dispatch(homeAction.clearTvShow())
    }, [props?.match?.params?.id])

    useEffect(() => {
        dispatch(homeAction.getGenreTvshowsRequest({ id: props?.match?.params?.id, page: page }))
    }, [page, props?.match?.params?.id])

    return (
        <div className="Tvshow">
            <Banner id={props?.match?.params?.id} genreMenu={true} data={results && results[0]} />
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
                            {allGenreTvshow.map((item, index) => {
                                if (item.backdrop_path && item.poster_path) {
                                    if (index === allGenreTvshow.length - 1) {
                                        return <ItemBox cb={setLastElement} slide={false} key={item.id} mediaType='tv' data={item} />
                                    }
                                    else {
                                        return <ItemBox slide={false} key={item.id} mediaType='tv' data={item} />
                                    }
                                }
                            })}
                        </div>
                    }
                </div>
            </div>
            {
                loading &&
                <div style={{ marginTop: '10px' }}>
                    <div className='container'>
                        <SkeletonLoading noTitle={true} />
                    </div>
                </div>
            }
        </div>
    )
}
