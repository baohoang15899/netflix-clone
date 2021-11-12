import { getMovieDetail, getRecommendShow, getTvDetail } from 'api/Services';
import { UrlImage } from 'api/Urls';
import { ImovieDetail, Irecommendation, ItvDetail } from 'global/Home/Interfaces';
import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faPlay, faList, faPlus, faHeart, faStar, faTimes, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import Btn from 'components/Home/DetailModalBtn'
import RecommendBox from 'components/Home/RecommendationBox'
import SkeletonLoading from 'components/Home/SkeletonLoading'

export default function Index(props: any) {
    const history = useHistory()
    const ref = useRef<any>()
    const [tv, setTv] = useState<ItvDetail>()
    const [movie, setMovie] = useState<ImovieDetail>()
    const [connect, setConnect] = useState<Boolean>()
    const [recomCheck, setRecomCheck] = useState<Boolean>()
    const [recommendation, setRecommendations] = useState<Array<Irecommendation>>()
    const [more, setMore] = useState<Boolean>(false)
    const [detailLoad, setDetailLoad] = useState<Boolean>(false)
    const [recomLoad, setRecomLoad] = useState<Boolean>(false)
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        if (props?.match?.params?.type === 'tv') {
            getTvDetail(props?.match?.params?.id, setTv, setConnect, setDetailLoad)
            getRecommendShow(
                props?.match?.params?.id,
                props?.match?.params?.type,
                setRecomCheck,
                setRecommendations,
                setRecomLoad)
        }
        else if (props?.match?.params?.type === 'movie') {
            getMovieDetail(props?.match?.params?.id, setMovie, setConnect, setDetailLoad)
            getRecommendShow(
                props?.match?.params?.id,
                props?.match?.params?.type,
                setRecomCheck,
                setRecommendations, setRecomLoad)
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
                <div onClick={() => history.goBack()} className='detailModal__close'>
                    <Icon style={{
                        padding: '2px'
                    }} size="2x" icon={faTimes} />
                </div>
                {connect && !detailLoad ?
                    <>
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
                        <div className='detailModal__inner-infoWrapper'>
                            <div className='detailModal__inner-info'>
                                <div className='detailModal__inner-infoLeft'>
                                    <div className='detailModal__inner-date'>
                                        <span className='detailModal__inner-release'>
                                            {movie ? movie.release_date : tv?.first_air_date}</span>
                                        <span className='detailModal__inner-runtime'>
                                            {props?.match?.params?.type === 'movie' ?
                                                movie && movie?.runtime
                                                    ?
                                                    `${Math.floor(movie.runtime / 60)}h
                                            ${movie.runtime % 60}p`
                                                    :
                                                    <span>Not found</span>
                                                :
                                                tv && tv?.episode_run_time.length > 0 ?
                                                    `${Math.floor(tv?.episode_run_time[0] / 60)}h
                                                ${tv?.episode_run_time[0] % 60}p/ep`
                                                    :
                                                    <span>Not found</span>
                                            }
                                        </span>
                                    </div>
                                    <p className='detailModal__inner-overview'>{movie ? movie.overview : tv?.overview}</p>
                                </div>
                                <div className='detailModal__inner-infoRight'>
                                    <div className='detailModal__inner-actors'>
                                        <span className='detailModal__inner-crewTitle'> Actors:{' '}</span>
                                        {movie?.cast.filter((item, index) => index < 4)
                                            ?.map(item => { return <span key={item.id} className='detailModal__inner-crewName'>{item.name},{' '}</span> })}
                                        {tv?.cast.filter((item, index) => index < 4)
                                            ?.map(item => { return <span key={item.id} className='detailModal__inner-crewName'>{item.name},{' '}</span> })}
                                        <span style={{ color: 'white' }}>...</span>
                                    </div>
                                    <div className='detailModal__inner-genres'>
                                        <span className='detailModal__inner-crewTitle'>
                                            Genres:{' '}
                                            {movie?.genres
                                                ?.map((item, index) => {
                                                    if (index !== (movie.genres && movie.genres?.length - 1))
                                                        return <span key={item.id} className='detailModal__inner-crewName'>{item.name},{' '}</span>
                                                    else
                                                        return <span key={item.id} className='detailModal__inner-crewName'>{item.name}.</span>
                                                })}
                                            {tv?.genres
                                                ?.map((item, index) => {
                                                    if (index !== tv.genres?.length - 1)
                                                        return <span key={item.id} className='detailModal__inner-crewName'>{item.name},{' '}</span>
                                                    else
                                                        return <span key={item.id} className='detailModal__inner-crewName'>{item.name}.</span>
                                                })}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <SkeletonLoading banner={true}/>
                }
                {recomCheck && !recomLoad ?
                    <div className='detailModal__inner-infoWrapper'>
                        <div className={more ? 'detailModal__inner-recommend add' : 'detailModal__inner-recommend'}>
                            <span className='detailModal__inner-recommendTitle'>Recommendation</span>
                            <div className='detailModal__inner-recommendItem'>
                                {recommendation && recommendation?.length > 0 ?
                                    recommendation?.map(item => {
                                        return <RecommendBox key={item.id} data={item} />
                                    })
                                    :
                                    <span className='notFound'>Recommendation not found.</span>
                                }
                            </div>
                        </div>
                        {
                            recommendation && recommendation?.length > 0 &&
                            <div className='detailModal__inner-moreBtn'>
                                <div className='detailModal__inner-iconWrapper'>
                                    <Icon
                                        onClick={() => setMore(!more)}
                                        className="detailModal__inner-iconMore"
                                        size="2x"
                                        icon={more ? faChevronUp : faChevronDown} />
                                </div>
                            </div>
                        }
                    </div>
                    :
                    <SkeletonLoading mutilBox={true}/>
                }
                {
                    connect && !detailLoad ?
                        <div className='detailModal__inner-infoWrapper'>
                            <div className='detailModal__inner-final'>
                                <h6 className='detailModal__inner-moreInfo'>
                                    More info about {movie ? movie?.original_title : tv?.name}
                                </h6>
                                <p className='detailModal__inner-finalInfoCategory'>Director:{' '}
                                    {movie?.crew.filter(item => item.job === 'Director').map((item, index) => {
                                        return <span key={item.id} className='detailModal__inner-crewName'>{item.name}.</span>
                                    })}
                                    {tv && <span className='detailModal__inner-crewName'>{tv.created_by[0].name}.</span>}
                                </p>
                                <p className='detailModal__inner-finalInfoCategory'>Actor:{' '}
                                    {movie?.cast?.map((item, index) => {
                                        if (index !== movie.cast?.length - 1) {
                                            return <span key={item.id} className='detailModal__inner-crewName'>{item.name},{' '}</span>
                                        }
                                        else {
                                            return <span key={item.id} className='detailModal__inner-crewName'>{item.name}.</span>
                                        }
                                    })}
                                    {tv?.cast?.map((item, index) => {
                                        if (index !== tv.cast?.length - 1) {
                                            return <span key={item.id} className='detailModal__inner-crewName'>{item.name},{' '}</span>
                                        }
                                        else {
                                            return <span key={item.id} className='detailModal__inner-crewName'>{item.name}.</span>
                                        }
                                    })
                                    }
                                </p>
                                <p className='detailModal__inner-finalInfoCategory'>Genre:{' '}{movie?.genres
                                    ?.map((item, index) => {
                                        if (index !== (movie.genres && movie.genres?.length - 1))
                                            return <span key={item.id} className='detailModal__inner-crewName'>{item.name},{' '}</span>
                                        else
                                            return <span key={item.id} className='detailModal__inner-crewName'>{item.name}.</span>
                                    })}
                                    {tv?.genres
                                        ?.map((item, index) => {
                                            if (index !== tv.genres?.length - 1)
                                                return <span key={item.id} className='detailModal__inner-crewName'>{item.name},{' '}</span>
                                            else
                                                return <span key={item.id} className='detailModal__inner-crewName'>{item.name}.</span>
                                        })}</p>
                            </div>
                        </div>
                        :
                        <SkeletonLoading />
                }
            </div>
        </div>
    )
}
