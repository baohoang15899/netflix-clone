import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { homeAction } from 'Redux/homeReducer'
import Banner from 'components/Home/Banner'
import { RootReducerModel } from 'Redux/rootReducer'
import CategoryContent from 'components/Home/CategoryContent'
import { CategoryType } from 'global/Home/Type'
import Skeleton from 'components/Home/SkeletonLoading'


export default function Index() {
    const dispatch = useDispatch()
    const trendingShow = useSelector((state: RootReducerModel) => state.homeReducer.trending)
    const popularTvAndMovies = useSelector((state: RootReducerModel) => state.homeReducer.allMoviesTvshowsTrending)
    const { allMovie, allTvshow, Loading } = useSelector((state: RootReducerModel) => state.homeReducer)
    const { popular, genreMovie, genreTv } = Loading
    const { results } = trendingShow
    const { movies, tvShows } = popularTvAndMovies
    useEffect(() => {
        dispatch(homeAction.getTrendingRequest())
        dispatch(homeAction.getTrendingMovieAndTvshowRequest())
        dispatch(homeAction.getMoviesByGenreRequest())
        dispatch(homeAction.getTvByGenreRequest())
    }, [])
    return (
        <div className='home'>
            <>
                <Banner
                    data={results && results[0]}
                />
                <div className='home__wrapper'>
                    <div className='home__categoryContent'>
                        {popular ?
                            <Skeleton />
                            :
                            <>
                                <CategoryContent type={CategoryType.MOVIE} movies={movies} title="Popular Movies" />
                                <CategoryContent type={CategoryType.TV} tvShows={tvShows} title="Popular TvShows" />
                            </>
                        }
                        {genreMovie ?
                            <Skeleton />
                            :
                            allMovie?.map((item, i) => {
                                return <CategoryContent key={i} type={CategoryType.MOVIE} movies={item} title={`${item.genre} movies`} />
                            })
                        }
                        {
                            genreTv ?
                                <Skeleton />
                                :
                                allTvshow?.map((item, i) => {
                                    return <CategoryContent key={i} type={CategoryType.TV} tvShows={item} title={`${item.genre} Tv shows`} />
                                })
                        }
                    </div>
                </div>
            </>
        </div>
    )
}
