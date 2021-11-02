import { UrlImage } from 'api/Urls';
import { IdataResults } from 'global/Home/Interfaces'
import React, { useState } from 'react'
import LazyLoad from 'react-lazyload'
import DefaultPoster from 'assets/image/defaultPoster.jpg'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function ItemBox(props: { data?: IdataResults, type: string }) {
    const [loading, setLoading] = useState<Boolean>(false)

    return (
        <div className='itemBox'>
            {!loading &&
                <SkeletonTheme  baseColor="#202020" highlightColor="#444">
                    <Skeleton className='skeletonLoad' />
                </SkeletonTheme>}
            <img onLoad={() => setLoading(!loading)} className='itemBox_img'
                src={props.data?.backdrop_path ? `${UrlImage.POSTER}${props.data?.backdrop_path}` : DefaultPoster} />
            <p className='itemBox_title'>{props.data?.original_title ? props.data?.original_title : props.data?.original_name}</p>
        </div>
    )
}
