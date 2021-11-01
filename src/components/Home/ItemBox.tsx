import { UrlImage } from 'api/Urls';
import { IdataResults } from 'global/Home/Interfaces'
import React from 'react'
import LazyLoad from 'react-lazyload'
import DefaultPoster from 'assets/image/defaultPoster.jpg'

export default function ItemBox(props: { data?: IdataResults, type: string }) {
    return (
        <div className='itemBox'>
            <LazyLoad height={220} once>
                <img className='itemBox_img'
                    src={props.data?.backdrop_path ? `${UrlImage.POSTER}${props.data?.backdrop_path}` : DefaultPoster} />
            </LazyLoad>
            <p className='itemBox_title'>{props.data?.original_title ? props.data?.original_title : props.data?.original_name}</p>
        </div>
    )
}
