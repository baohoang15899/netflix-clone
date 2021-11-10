import { UrlImage } from 'api/Urls';
import { IdataResults } from 'global/Home/Interfaces'
import React, { useRef, useState } from 'react'
import DefaultPoster from 'assets/image/defaultPoster.jpg'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link,useLocation } from 'react-router-dom';
export default function ItemBox(props: { data?: IdataResults, mediaType: string }) {
    const location = useLocation();
    return (
        <Link 
        key={props.data?.id} 
        to={{pathname:`/home/${props.mediaType}/${props.data?.id}`, 
        state: { background: location,}}}>
            <div className='itemBox'>
                <div className='itemBox_cover'>
                    <img className='itemBox_img swiper-lazy'
                        data-src={props.data?.backdrop_path ? `${UrlImage.POSTER}${props.data?.backdrop_path}` : DefaultPoster} />
                    <p className='itemBox_title'>{props.data?.original_title ? props.data?.original_title : props.data?.original_name}</p>
                </div>
                <div className='itemBox_info'>

                </div>
            </div>
        </Link>
    )
}