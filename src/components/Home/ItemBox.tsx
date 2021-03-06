import { UrlImage } from 'api/Urls';
import { IdataResults } from 'global/Home/Interfaces'
import React, { memo } from 'react'
import DefaultPoster from 'assets/image/defaultPoster.jpg'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link, useLocation } from 'react-router-dom';
function ItemBox(props: { data?: IdataResults, mediaType: string, slide?: Boolean, cb?:(e:any)=>void}) {
    const location = useLocation();
    return (
        <Link
            key={props.data?.id}
            to={{
                pathname: `/home/${props.mediaType}/${props.data?.id}`,
                state: { background: location, }
            }}>
            <div ref={props.cb} className='itemBox'>
                <div className='itemBox_cover'>
                    {props.slide ?
                        <img className='itemBox_img swiper-lazy'
                            data-src={props.data?.backdrop_path ? `${UrlImage.POSTER}${props.data?.backdrop_path}` : DefaultPoster} />
                        :
                        <img className='itemBox_img'
                            src={props.data?.backdrop_path ? `${UrlImage.POSTER}${props.data?.backdrop_path}` : DefaultPoster} />
                    }
                    <p className='itemBox_title'>{props.data?.original_title ? props.data?.original_title : props.data?.original_name}</p>
                </div>
            </div>
        </Link>
    )
}
export default memo(ItemBox)