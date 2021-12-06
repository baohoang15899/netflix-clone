import { getVideo } from 'api/Services'
import { Ivideo } from 'global/Home/Interfaces'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { homeAction } from 'Redux/homeReducer'
import { RootReducerModel } from 'Redux/rootReducer'

export default function Index() {
    const modal = useSelector((state: RootReducerModel) => state.homeReducer.modal)
    const ref = useRef<any>()
    const dispatch = useDispatch()
    const [video, setVideo] = useState<any>()
    const [load, setLoad] = useState<Boolean>(false)
    useEffect(() => {
        if (modal.status) {
            getVideo(modal.id, modal.media_type, setLoad, setVideo)
        }
    }, [modal.status])

    const handleCloseModal = (e: any) => {
        if (e.target.className === ref.current.className) {
            dispatch(homeAction.closeModal())
            setVideo(null)
        }
    }
    return (
        <div ref={ref} onClick={(e) => handleCloseModal(e)} className={modal.status ? `modalTrailer add` : `modalTrailer`}>
            {
                video ?
                    video?.results.length > 0 ?
                        <iframe
                            src={modal.status ? `https://www.youtube-nocookie.com/embed/${video.results[0].key}` : ''}
                            frameBorder="0"
                            className='modalTrailer__iframe'
                            title='video'>
                        </iframe>
                        :
                        <span className={
                            video?.results.length < 1 ?
                                `modalTrailer__notFound add` :
                                'modalTrailer__notFound'}>
                            No video found
                        </span>
                    :
                    <span className={
                        video?.results.length < 1 ?
                            `modalTrailer__notFound add` :
                            'modalTrailer__notFound'}>
                        No video found</span>
            }
        </div>
    )
}
