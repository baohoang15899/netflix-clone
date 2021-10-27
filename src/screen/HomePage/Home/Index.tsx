import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { homeAction } from 'Redux/homeReducer'
import Banner from 'components/Home/Banner'
import { RootReducerModel } from 'Redux/rootReducer'
import { allMovieRequest } from 'api/Services'
import CategoryContent from 'components/Home/CategoryContent'
import { CategoryType } from 'global/Home/Type'
export default function Index() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(homeAction.getTrendingRequest())
        dispatch(homeAction.getTrendingMovieAndTvshowRequest())
    }, [])
    const trendingShow = useSelector((state: RootReducerModel) => state.homeReducer.trending)
    const popularTvAndMovies = useSelector((state: RootReducerModel) => state.homeReducer.allMoviesTvshowsTrending)
    const { results } = trendingShow
    const { movies, tvShows } = popularTvAndMovies

    return (
        <div className='home'>
            <Banner
                data={results && results[0]}
            />
            <div className='home__wrapper'>
                <div className='home__categoryContent'>
                <CategoryContent type={CategoryType.MOVIE} movies={movies} title="Popular Movies" />
                <CategoryContent type={CategoryType.TV} title="Popular TvShows" />
                </div>
            </div>
        </div>
    )
}
