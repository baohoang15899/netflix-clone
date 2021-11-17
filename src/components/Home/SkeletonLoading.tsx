import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface typeLoad {
    banner?: Boolean;
    mutilBox?: Boolean;
    noTitle?: Boolean
}
export default function SkeletonLoading({ banner, mutilBox, noTitle }: typeLoad) {
    if (banner) {
        return (
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <div className='skeletonWrapper'>
                    <Skeleton className='skeletonBanner' />
                </div>
            </SkeletonTheme>
        )
    }

    if (noTitle) {
        return (
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Skeleton className='skeleton' />
            </SkeletonTheme>
        )
    }

    if (mutilBox) {
        return (
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <div className='skeletonWrapper'>
                    <Skeleton className='skeletonName' />
                </div>
                <div className='skeletonMultiBox'>
                    <Skeleton className='skeleton' />
                    <Skeleton className='skeleton' />
                    <Skeleton className='skeleton' />
                    <Skeleton className='skeleton' />
                    <Skeleton className='skeleton' />
                    <Skeleton className='skeleton' />
                </div>
            </SkeletonTheme>
        )
    }

    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <div className='skeletonWrapper'>
                <Skeleton className='skeletonName' />
                <Skeleton className='skeleton' />
            </div>
        </SkeletonTheme>
    )
}
