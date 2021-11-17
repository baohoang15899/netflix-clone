import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { homeAction } from 'Redux/homeReducer'
import { RootReducerModel } from 'Redux/rootReducer'
import Banner from 'components/Home/Banner'
import ItemBox from 'components/Home/ItemBox'
import SkeletonLoading from 'components/Home/SkeletonLoading'

export default function Index(props: any) {
    const dispatch = useDispatch()
    const trendingShow = useSelector((state: RootReducerModel) => state.homeReducer.trendingMovie)
    const storeData = useSelector((state: RootReducerModel) => state.homeReducer)
    const loading = useSelector((state: RootReducerModel) => state.homeReducer.Loading.moviePage)
    const { results } = trendingShow
    const { genresMovie, allGenreMovie } = storeData
    useEffect(() => {
        dispatch(homeAction.getTrendingMovieRequest())
        dispatch(homeAction.getGenreMoviesRequest({ id: props?.match?.params?.id }))
    }, [])

    return (
        <div>
            <div className="Tvshow">
                <Banner data={results && results[0]} />
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
                            loading ?
                                <SkeletonLoading noTitle={true} />
                                :
                                allGenreMovie &&
                                <div className='MediaWrapper'>
                                    {allGenreMovie.map(item => {
                                        if (item.backdrop_path && item.poster_path) {
                                            return <ItemBox slide={false} key={item.id} mediaType='movie' data={item} />
                                        }
                                    })}
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
