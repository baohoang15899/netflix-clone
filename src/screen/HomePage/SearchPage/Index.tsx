import ItemBox from 'components/Home/ItemBox'
import SkeletonLoading from 'components/Home/SkeletonLoading'
import ObserveIntersection from 'global/ObserveIntersection'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { homeAction } from 'Redux/homeReducer'
import { RootReducerModel } from 'Redux/rootReducer'

export default function Index(props: any) {
    const search = useSelector((state: RootReducerModel) => state.homeReducer.search)
    const load = useSelector((state: RootReducerModel) => state.homeReducer.Loading.searchLoad)
    const dispatch = useDispatch()
    const history = useHistory()
    useEffect(() => {
        if (props?.keyword.length < 1) {
            history.goBack()
        }
        const debounce = setTimeout(() => {
            dispatch(homeAction.getSearchRequest({ query: props?.match?.params?.keyword, page: 1 }))
        }, 300)
        return () => {
            clearTimeout(debounce)
        }
    }, [props?.match?.params?.keyword])

    return (
        <div className='searchPage'>
            <div className='container'>
                {!load || search.length > 0 ?
                    <div className='searchPage__grid'>
                        {search.map((item, index) => {
                            if (item.media_type !== 'person' && item.backdrop_path && item.poster_path) {
                                return <ItemBox slide={false} key={item.id} mediaType={item.media_type} data={item} />
                            }
                        })
                        }
                    </div>
                    :
                    <div style={{ paddingTop: '8%' }}>
                        <SkeletonLoading noTitle={true} />
                    </div>
                }
            </div>
        </div>
    )
}
