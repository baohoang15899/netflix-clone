import React, { useCallback, useEffect, useState } from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faStar, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { rateMedia } from 'api/Services'

interface Inumber {
    number?: number
    cb: (i: number) => void
    ratedValue?: any
    cbLoad: (i: boolean) => void
    media_type: string
    media_id: number
    deleteRating: () => void
}

export default function Star({ number, cb, ratedValue, cbLoad, media_id, media_type, deleteRating }: Inumber) {
    const [arr, setArr] = useState<Array<number>>([])
    const numStar = useCallback((num: number = 0) => {
        for (let index = 0; index < num; index++) {
            setArr(prev => [...prev, index])
        }
    }, [])

    useEffect(() => {
        if (typeof number === 'number') {
            numStar(number)
        }
    }, [])

    const handleRating = (value: number) => {
        rateMedia(media_type, media_id, value, cbLoad)
    }

    return (
        <>
            <Icon className='rating__delete' size="lg" icon={faWindowClose} onClick={() => deleteRating()}/>
            <div className='rating__group'>
                {
                    arr && arr.length > 0 && arr.map((item: any, i: number) => {
                        return (
                            <Icon
                                key={i}
                                className={
                                    ratedValue &&
                                        ratedValue > 0 &&
                                        typeof ratedValue === 'number' &&
                                        i <= ratedValue - 1 ? "rating__group-star  add" : 'rating__group-star'}
                                size="lg"
                                id='s'
                                onClick={() => { cb(i + 1); handleRating(i + 1) }}
                                icon={faStar} />
                        )
                    })
                }
            </div>
        </>
    )
}
