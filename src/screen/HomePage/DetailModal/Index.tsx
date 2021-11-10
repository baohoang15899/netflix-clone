import { getMovieDetail, getTvDetail } from 'api/Services';
import { UrlImage } from 'api/Urls';
import { ImovieDetail, ItvDetail } from 'global/Home/Interfaces';
import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faPlay, faList, faPlus, faHeart, faStar, faTimes } from '@fortawesome/free-solid-svg-icons'
import Btn from 'components/Home/DetailModalBtn'

export default function Index(props: any) {
    const history = useHistory()
    const ref = useRef<any>()
    const [tv, setTv] = useState<ItvDetail>()
    const [movie, setMovie] = useState<ImovieDetail>()
    const [connect, setConnect] = useState<Boolean>()

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        if (props?.match?.params?.type === 'tv') {
            getTvDetail(props?.match?.params?.id, setTv, setConnect)
        }
        else if (props?.match?.params?.type === 'movie') {
            getMovieDetail(props?.match?.params?.id, setMovie, setConnect)
        }
        return () => { document.body.style.overflow = 'unset' }
    }, [])

    const handleGoback = (e: any) => {
        if (e.target.className === ref.current.className) {
            history.goBack()
        }
    }

    return (
        <div ref={ref} onClick={(e) => handleGoback(e)} className='detailModal'>
            <div className='detailModal__inner'>
                <div onClick={()=> history.goBack()} className='detailModal__close'>
                    <Icon style={{
                        padding: '2px'
                    }} size="2x" icon={faTimes} />
                </div>
                {connect &&
                    <div className='detailModal__inner-background'
                        style={{
                            backgroundImage: ` linear-gradient(
                            0deg,rgba(0,0,0,1) 0,rgba(0,0,0,0) 100%),url(${movie ?
                                    UrlImage.TRENDING_BACKGROUND + movie?.backdrop_path :
                                    UrlImage.TRENDING_BACKGROUND + tv?.backdrop_path})`
                        }}>
                        <div className='detailModal__inner-title'>
                            <h4 className='detailModal__inner-name'>
                                {movie ? movie?.original_title : tv?.name}
                            </h4>
                            <div className='detailModal__inner-btn'>
                                <div className='detailModal__inner-btnTrailer'>
                                    <Icon style={{ marginRight: '10px' }} size="sm" icon={faPlay} />
                                    <span>Trailer</span>
                                </div>
                                <div className='detailModal__inner-config'>
                                    <Btn component={
                                        <Icon
                                            className="detailModal__inner-icon"
                                            size="lg"
                                            icon={faPlus} />
                                    }
                                    />
                                    <Btn component={
                                        <Icon
                                            className="detailModal__inner-icon"
                                            size="lg"
                                            icon={faList} />
                                    } />
                                    <Btn component={
                                        <Icon
                                            className="detailModal__inner-icon"
                                            size="lg"
                                            icon={faHeart} />
                                    } />
                                    <Btn component={
                                        <Icon
                                            className="detailModal__inner-icon"
                                            size="lg"
                                            icon={faStar} />
                                    } />
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
