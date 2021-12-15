import { getFavorite } from 'api/Services'
import ItemBox from 'components/Home/ItemBox'
import SkeletonLoading from 'components/Home/SkeletonLoading'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { homeAction } from 'Redux/homeReducer'
import { RootReducerModel } from 'Redux/rootReducer'

export default function Index() {
    const [index, setIndex] = useState<string>('1')
    const user = useSelector((state: RootReducerModel) => state.authReducer.user)
    const favorite = useSelector((state: RootReducerModel) => state.homeReducer)
    const { Loading } = favorite
    const { movieFavorite, tvFavorite, resetPageMovie, resetPageTv } = favorite
    const dispatch = useDispatch()
    const [pageMovie, setPageMovie] = useState<number>(1)
    const [pageTv, setPageTv] = useState<number>(1)
    const [totalPage, setTotalPage] = useState<number>()
    const observer = useRef<any>()

    const lastElement = useCallback(element => {
        if (index === '1') {
            if (Loading.movieFavorite) return
            if (observer.current) observer.current.disconnect()
            observer.current = new IntersectionObserver(item => {
                if (item[0].isIntersecting) {
                    if (totalPage) {
                        // console.log(pageMovie, totalPage,'movie');
                        if (pageMovie < totalPage) {
                            setPageMovie(prev => prev + 1)
                        }
                    }
                }
            }, { rootMargin: '200px' })
            if (element) observer.current.observe(element)
        }
        else if (index === '2') {
            if (Loading.tvFavorite) return
            if (observer.current) observer.current.disconnect()
            observer.current = new IntersectionObserver(item => {
                if (item[0].isIntersecting) {
                    if (totalPage) {
                        // console.log(pageTv, totalPage,'tv');
                        if (pageTv < totalPage) {
                            setPageTv(prev => prev + 1)
                        }
                    }
                }
            }, { rootMargin: '200px' })
            if (element) observer.current.observe(element)
        }
    }, [index, Loading.movieFavorite, Loading.tvFavorite, totalPage])


    const handleClick = (e: any) => {
        setIndex(e.target.id)
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        return () => {
            dispatch(homeAction.clearFavorite())
        }
    }, [])

    useEffect(() => {
        // console.log(resetPageMovie,resetPageTv);
        dispatch(homeAction.clearFavorite())
        window.scrollTo(0, 0)
        setPageMovie(1)
        setPageTv(1)
        dispatch(homeAction.getTvFavoriteRequest(
            { type: 'tv', account_id: user.id, page: 1 }
        ))
        dispatch(homeAction.getMovieFavoriteRequest(
            { type: 'movies', account_id: user.id, page: 1 }
        ))
    }, [resetPageMovie, resetPageTv])


    useEffect(() => {
        getFavorite({ type: index === '1' ? 'movies' : 'tv', account_id: user.id, page: 1 }).then(data => {
            setTotalPage(data.data.total_pages)
        })
    }, [index])

    useEffect(() => {
        dispatch(homeAction.getMovieFavoriteRequest(
            { type: 'movies', account_id: user.id, page: pageMovie }
        ))
    }, [pageMovie])

    useEffect(() => {
        dispatch(homeAction.getTvFavoriteRequest(
            { type: 'tv', account_id: user.id, page: pageTv }
        ))
    }, [pageTv])


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
                    <div className={index === '1' ? 'favorite__content-movie add' : 'favorite__content-movie'}>
                        {
                            index === '1' &&
                            movieFavorite && movieFavorite.length > 0 &&
                            movieFavorite.map((item, i) => {
                                if (item.backdrop_path && item.poster_path) {
                                    if (i === movieFavorite.length - 1) {
                                        return <ItemBox cb={lastElement} slide={false} key={item.id} mediaType='movie' data={item} />
                                    }
                                    else {
                                        return <ItemBox slide={false} key={item.id} mediaType='movie' data={item} />
                                    }
                                }
                            })
                        }
                    </div>
                    <div className={index === '2' ? 'favorite__content-tv add' : 'favorite__content-tv'}>
                        {
                            index === '2'
                            &&
                            tvFavorite && tvFavorite.length > 0 &&
                            tvFavorite.map((item, i) => {
                                if (item.backdrop_path && item.poster_path) {
                                    if (i === tvFavorite.length - 1) {
                                        return <ItemBox cb={lastElement} slide={false} key={item.id} mediaType='tv' data={item} />
                                    }
                                    else {
                                        return <ItemBox slide={false} key={item.id} mediaType='tv' data={item} />
                                    }
                                }
                            })
                        }
                    </div>
                    {index === '1' && Loading.movieFavorite && movieFavorite.length < 1 ?
                        <div style={{ marginTop: '20px' }}>
                            <SkeletonLoading noTitle={true} />
                        </div>
                        : null
                    }
                    {index === '2' && Loading.tvFavorite && tvFavorite.length < 1 ?
                        <div style={{ marginTop: '20px' }}>
                            <SkeletonLoading noTitle={true} />
                        </div>
                        : null
                    }
                    {index === '1' && !Loading.movieFavorite && movieFavorite.length < 1 &&
                        <div className='errTextPaddingCenterEqual'>
                            <span >Your favorite list is empty</span>
                        </div>
                    }
                    {index === '2' && !Loading.tvFavorite && tvFavorite.length < 1 &&
                        <div className='errTextPaddingCenterEqual'>
                            <span >Your favorite list is empty</span>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
