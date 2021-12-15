import { getSearchData } from 'api/Services'
import ItemBox from 'components/Home/ItemBox'
import SkeletonLoading from 'components/Home/SkeletonLoading'
import ObserveIntersection from 'global/ObserveIntersection'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { homeAction } from 'Redux/homeReducer'
import { RootReducerModel } from 'Redux/rootReducer'

export default function Index(props: any) {
    const search = useSelector((state: RootReducerModel) => state.homeReducer.search)
    const load = useSelector((state: RootReducerModel) => state.homeReducer.Loading.searchLoad)
    const dispatch = useDispatch()
    const [page, setPage] = useState<number>(1)
    const [totalPage, setTotalPage] = useState<number>()
    const observer = useRef<any>()

    const lastElement = useCallback(element => {
        if (load) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(item => {
            if (item[0].isIntersecting) {
                if (totalPage) {
                    if (page < totalPage) {
                        setPage(prev => prev + 1)
                    }
                }
            }
        }, { rootMargin: '100px' })
        if (element) observer.current.observe(element)
    }, [load, totalPage])

    useEffect(() => {
        getSearchData({ query: props?.match?.params?.keyword, page: page }).then(data => {
            setTotalPage(data.data.total_pages)
        })
    }, [])

    useEffect(() => {
        dispatch(homeAction.getSearchRequest({ query: props?.match?.params?.keyword, page: page }))
    }, [props?.match?.params?.keyword, page])

    useEffect(() => {
        window.scrollTo(0, 0)
        setPage(1)
        dispatch(homeAction.clearSearchData())
    }, [props?.match?.params?.keyword])


    return (
        <div className='searchPage'>
            <div className='container'>
                {search && search.length > 0 &&
                    <div className='searchPage__grid'>
                        {search.map((item, index) => {
                            if (item.media_type !== 'person' && item.backdrop_path && item.poster_path) {
                                if (index === search.length - 1) {
                                    return <ItemBox cb={lastElement} slide={false} key={index} mediaType={item.media_type} data={item} />
                                }
                                else {
                                    return <ItemBox slide={false} key={index} mediaType={item.media_type} data={item} />
                                }
                            }
                        })
                        }
                    </div>
                }
                {load ?
                    <div style={{ paddingTop: '30px' }}>
                        <SkeletonLoading noTitle={true} />
                    </div>
                    : null
                }
                {
                    search.length < 1 && !load &&
                    <div className='searchPage__notFound'>No results found</div>
                }
            </div>
        </div>
    )
}
