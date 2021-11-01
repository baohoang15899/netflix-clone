import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function SkeletonLoading() {
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <div className='skeletonWrapper'>
                <Skeleton className='skeletonName'  />
                <Skeleton className='skeleton'  />
            </div>
        </SkeletonTheme>
    )
}
