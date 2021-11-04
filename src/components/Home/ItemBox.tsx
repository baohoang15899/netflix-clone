import { UrlImage } from 'api/Urls';
import { IdataResults } from 'global/Home/Interfaces'
import React, { useRef, useState } from 'react'
import DefaultPoster from 'assets/image/defaultPoster.jpg'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function ItemBox(props: { data?: IdataResults, type: string }) {
    const [loading, setLoading] = useState<Boolean>(false)
    const [scale,setScale] = useState<Boolean>(false)
    const ref = useRef<any>(null)
    const handleMouseOver = () =>{
        ref.current = setTimeout(()=>setScale(true),2000)
    }

    const handleMouseOut = () =>{
        if (ref.current) {
            clearTimeout(ref.current)
            if (scale) setScale(false)
        }
    }

    return (
        <div onMouseOut={()=>handleMouseOut()} onMouseOver={() =>handleMouseOver()} className={scale ? 'itemBox add' : 'itemBox'}>
            <div className='itemBox_cover'>
                {/* {!loading &&
                <SkeletonTheme  baseColor="#202020" highlightColor="#444">
                    <Skeleton className='skeletonLoad' />
                </SkeletonTheme>} */}
                <img className='itemBox_img swiper-lazy'
                    data-src={props.data?.backdrop_path ? `${UrlImage.POSTER}${props.data?.backdrop_path}` : DefaultPoster} />
                <p className='itemBox_title'>{props.data?.original_title ? props.data?.original_title : props.data?.original_name}</p>
            </div>
            <div className='itemBox_info'>

            </div>
        </div>
    )
}
