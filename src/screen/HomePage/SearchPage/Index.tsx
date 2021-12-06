import ItemBox from 'components/Home/ItemBox'
import SkeletonLoading from 'components/Home/SkeletonLoading'
import ObserveIntersection from 'global/ObserveIntersection'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { homeAction } from 'Redux/homeReducer'
import { RootReducerModel } from 'Redux/rootReducer'

export default function Index(props: any) {
    const search = useSelector((state: RootReducerModel) => state.homeReducer.search)
    const load = useSelector((state: RootReducerModel) => state.homeReducer.Loading.searchLoad)
    const dispatch = useDispatch()
    const [lastElement, setLastElement] = useState<any>()
    const [page, setPage] = useState<number>(1)

    const observer = useRef(new IntersectionObserver(item => {
        if (item[0].isIntersecting) {
            if (!load) {
                setPage(prev => prev + 1)
            }
        }
    }, { rootMargin: '200px' }))

    useEffect(() => {
        const currentLastElement = observer.current
        if (lastElement) {
            currentLastElement.observe(lastElement)
        }
        return () => {
            if (lastElement) {
                currentLastElement.unobserve(lastElement)
            }
        }
    }, [lastElement])

    useEffect(() => {
        dispatch(homeAction.getSearchRequest({ query: props?.match?.params?.keyword, page: page }))
    }, [props?.match?.params?.keyword, page])

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(homeAction.clearSearchData())
        setPage(1)
    }, [props?.match?.params?.keyword])


    return (
        <div className='searchPage'>
            <div className='container'>
                {search && search.length > 0 &&
                    <div className='searchPage__grid'>
                        {search.map((item, index) => {
                            if (item.media_type !== 'person' && item.backdrop_path && item.poster_path) {
                                if (search.length - 1 === index) {
                                    return <ItemBox cb={setLastElement} slide={false} key={item.id} mediaType={item.media_type} data={item} />
                                }
                                else {
                                    return <ItemBox slide={false} key={item.id} mediaType={item.media_type} data={item} />
                                }
                            }
                        })
                        }
                    </div>
                }
                {load &&
                    <div style={{ paddingTop: '100px' }}>
                        <SkeletonLoading noTitle={true} />
                    </div>
                }
                {
                    search.length < 1 &&
                    <div className='searchPage__notFound'>No results found</div>
                }
            </div>
        </div>
    )
}
