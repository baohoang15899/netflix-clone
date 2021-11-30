import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { homeAction } from 'Redux/homeReducer'
import { RootReducerModel } from 'Redux/rootReducer'
import Banner from 'components/Home/Banner'
import ItemBox from 'components/Home/ItemBox'
import SkeletonLoading from 'components/Home/SkeletonLoading'
import ObserveIntersection from 'global/ObserveIntersection'

export default function Index(props: any) {
    const dispatch = useDispatch()
    const trendingShow = useSelector((state: RootReducerModel) => state.homeReducer.trendingMovie)
    const storeData = useSelector((state: RootReducerModel) => state.homeReducer)
    const loading = useSelector((state: RootReducerModel) => state.homeReducer.Loading.moviePage)
    const { results } = trendingShow
    const { genresMovie, allGenreMovie } = storeData
    const [lastElement, setLastElement] = useState<any>()

    const page = ObserveIntersection(lastElement, loading)

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(homeAction.getTrendingMovieRequest())
        dispatch(homeAction.clearMovie())
        return () => {
            dispatch(homeAction.clearMovie())
        }
    }, [])

    useEffect(() => {
        dispatch(homeAction.clearMovie())
    }, [props?.match?.params?.id])

    useEffect(() => {
        dispatch(homeAction.getGenreMoviesRequest({ id: props?.match?.params?.id, page: page }))
    }, [page, props?.match?.params?.id])

    return (
        <div>
            <div className="Tvshow">
                <Banner id={props?.match?.params?.id} genreMenu={true} data={results && results[0]} />
                <div className='Tvshow__wrapper'>
                    <div className="container">
                        {
                            genresMovie &&
                            <div className="home__category-header">
                                {genresMovie.length > 0 &&
                                    genresMovie.filter(item => item.id == props?.match?.params?.id)[0].name
                                }
                            </div>
                        }
                        {
                            allGenreMovie &&
                            <div className='MediaWrapper'>
                                {allGenreMovie.map((item, index) => {
                                    if (item.backdrop_path && item.poster_path) {
                                        if (index === allGenreMovie.length - 1) {
                                            return <ItemBox cb={setLastElement} slide={false} key={item.id} mediaType='movie' data={item} />
                                        }
                                        else {
                                            return <ItemBox slide={false} key={item.id} mediaType='movie' data={item} />
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
        </div>
    )
}
