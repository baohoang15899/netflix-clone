import { getMovieDetail, getRecommendShow, getTvDetail, markFavorite, mediaState, rateMedia, ratingDelete } from 'api/Services';
import { UrlImage } from 'api/Urls';
import { ImediaState, ImovieDetail, Irecommendation, ItvDetail } from 'global/Home/Interfaces';
import React, { useEffect, useRef, useState } from 'react'
import { useHistory, useLocation } from 'react-router';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faPlay, faList, faPlus, faHeart, faStar, faStarHalf, faTimes, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import Btn from 'components/Home/DetailModalBtn'
import RecommendBox from 'components/Home/RecommendationBox'
import SkeletonLoading from 'components/Home/SkeletonLoading'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { homeAction } from 'Redux/homeReducer';
import { RootReducerModel } from 'Redux/rootReducer';
import Star from 'components/Home/Star';
interface IstateLocation {
    background?: any
}

export default function Index(props: any) {
    const location = useLocation<IstateLocation>()
    const history = useHistory()
    const ref = useRef<any>()
    const ratingRef = useRef<any>()
    const [tv, setTv] = useState<ItvDetail>()
    const [movie, setMovie] = useState<ImovieDetail>()
    const [connect, setConnect] = useState<Boolean>()
    const [recomCheck, setRecomCheck] = useState<Boolean>()
    const [recommendation, setRecommendations] = useState<Array<Irecommendation>>()
    const [more, setMore] = useState<Boolean>(false)
    const [detailLoad, setDetailLoad] = useState<Boolean>(false)
    const [recomLoad, setRecomLoad] = useState<Boolean>(false)
    const [favorite, setFavorite] = useState(true)
    const [showRating, setShowRating] = useState<boolean>(false)
    const user = useSelector((state: RootReducerModel) => state.authReducer.user)
    const [mediaStateInfo, setMediaStateInfo] = useState<ImediaState>()
    const [ratingLoad, setRatingLoad] = useState<boolean>(false)
    const [ratingValue, setRatingValue] = useState<number>(0)
    const dispatch = useDispatch()

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
            mediaState(props?.match?.params?.type, parseInt(props?.match?.params?.id), setMediaStateInfo)
        }
        else if (props?.match?.params?.type === 'movie') {
            getMovieDetail(props?.match?.params?.id, setMovie, setConnect, setDetailLoad)
            getRecommendShow(
                props?.match?.params?.id,
                props?.match?.params?.type,
                setRecomCheck,
                setRecommendations, setRecomLoad)
            mediaState(props?.match?.params?.type, parseInt(props?.match?.params?.id), setMediaStateInfo)
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [])

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ratingRef.current && !ratingRef.current.contains(event.target)) {
                setShowRating(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (mediaStateInfo?.rated) {
            if (mediaStateInfo?.rated.value > 0) {
                setRatingValue(mediaStateInfo?.rated.value)
            }
        }
        else {
            setRatingValue(0)
        }
    }, [mediaStateInfo?.rated])

    useEffect(() => {
        if (mediaStateInfo?.favorite) {
            setFavorite(true)
        }
        else {
            setFavorite(false)
        }
    }, [mediaStateInfo])

    const handleGoback = (e: any) => {
        if (e.target.className === ref.current.className) {
            if (location?.state?.background) {
                history.goBack()
            } else {
                history.push('/home')
            }
        }
    }

    const openTrailerModal = () => {
        dispatch(homeAction.openModal({ id: props?.match?.params?.id, media_type: props?.match?.params?.type }))
    }

    const handleCloseBtn = () => {
        if (location?.state?.background) {
            history.goBack()
        } else {
            history.push('/home')
        }
    }


    const handleFavorite = () => {
        if (favorite) {
            setFavorite(false)
            dispatch(homeAction.markFavoriteRequest({
                media_type: props?.match?.params?.type,
                media_id: parseInt(props?.match?.params?.id),
                favorite: false,
                account_id: user.id
            }))
            // markFavorite(props?.match?.params?.type, parseInt(props?.match?.params?.id), false, user.id, setMarkLoad)
        }
        else {
            setFavorite(true)
            dispatch(homeAction.markFavoriteRequest({
                media_type: props?.match?.params?.type,
                media_id: parseInt(props?.match?.params?.id),
                favorite: true,
                account_id: user.id
            }))
        }

    }

    const handleDeleteRating = () => {
        ratingDelete(props?.match?.params?.type, parseInt(props?.match?.params?.id))
        if (ratingValue > 0) {
            setRatingValue(0)
        }
    }

    return (
        <div ref={ref} onClick={(e) => handleGoback(e)} className='detailModal'>
            {connect === true && !detailLoad &&
                <div className='detailModal__inner'>
                    <div onClick={() => handleCloseBtn()} className='detailModal__close'>
                        <Icon style={{
                            padding: '2px'
                        }} size="2x" icon={faTimes} />
                    </div>
                    {connect && !detailLoad && mediaStateInfo ?
                        <>
                            <div className='detailModal__inner-background'
                                style={{
                                    backgroundImage: ` linear-gradient(
                              0deg,rgba(0,0,0,1) 0,rgba(0,0,0,0) 100%),url(${props?.match?.params?.type === 'movie' ?
                                            UrlImage.TRENDING_BACKGROUND + movie?.backdrop_path :
                                            UrlImage.TRENDING_BACKGROUND + tv?.backdrop_path})`
                                }}>
                                <div className='detailModal__inner-title'>
                                    <h4 className='detailModal__inner-name'>
                                        {props?.match?.params?.type === 'movie' ? movie?.original_title : tv?.name ? tv?.name : tv?.original_name}
                                    </h4>
                                    <div className='detailModal__inner-btn'>
                                        <div onClick={() => openTrailerModal()} className='detailModal__inner-btnTrailer'>
                                            <Icon style={{ marginRight: '10px' }} size="sm" icon={faPlay} />
                                            <span>Trailer</span>
                                        </div>
                                        <div className='detailModal__inner-config'>
                                            <Btn onClick={() => handleFavorite()} component={
                                                <Icon
                                                    className="detailModal__inner-icon"
                                                    size="lg"
                                                    style={{ transition: ' color ease-in-out 0.1s' }}
                                                    color={favorite ? '#e50914' : 'white'}
                                                    icon={faHeart} />
                                            } />
                                            <div ref={ratingRef}
                                                onClick={() => setShowRating(true)}
                                                className='detailModal__inner-btnAdd'>
                                                {ratingValue > 0 ?
                                                    <span className='detailModal__inner-ratingValue'>{ratingValue}</span>
                                                    :
                                                    <Icon
                                                        className="detailModal__inner-icon"
                                                        size="lg"
                                                        color={'white'}
                                                        icon={faStar} />
                                                }
                                                <div className={showRating ? 'rating add' : 'rating'}>
                                                    <Star
                                                        deleteRating={handleDeleteRating}
                                                        cbLoad={setRatingLoad}
                                                        media_type={props?.match?.params?.type}
                                                        media_id={parseInt(props?.match?.params?.id)}
                                                        ratedValue={ratingValue}
                                                        cb={setRatingValue}
                                                        number={10} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='detailModal__inner-infoWrapper'>
                                <div className='detailModal__inner-info'>
                                    <div className='detailModal__inner-infoLeft'>
                                        <div className='detailModal__inner-date'>
                                            <span className='detailModal__inner-release'>
                                                {props?.match?.params?.type === 'movie' ? movie && movie.release_date : tv?.first_air_date}</span>
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
                                        <span className='detailModal__inner-rating'>
                                            Rating: {props?.match?.params?.type === 'movie' ? movie && movie.vote_average : tv?.vote_average}
                                        </span>
                                        <p className='detailModal__inner-overview'>{movie ? movie.overview : tv?.overview}</p>
                                    </div>
                                    <div className='detailModal__inner-infoRight'>
                                        <div className='detailModal__inner-actors'>
                                            <span className='detailModal__inner-crewTitle'> Actors:{' '}</span>
                                            {props?.match?.params?.type === 'movie' ?
                                                movie && movie?.cast.length > 0 ? movie?.cast.filter((item, index) => index < 4)
                                                    ?.map((item, index) => { return <span key={index} className='detailModal__inner-crewName'>{item.name},{' '}</span> })
                                                    :
                                                    <span className='detailModal__inner-crewName'>Not found</span>
                                                :
                                                tv && tv.cast.length > 0 ? tv?.cast.filter((item, index) => index < 4)
                                                    ?.map((item, index) => { return <span key={index} className='detailModal__inner-crewName'>{item.name},{' '}</span> })
                                                    :
                                                    <span className='detailModal__inner-crewName'>Not found</span>
                                            }
                                            <span style={{ color: 'white' }}>...</span>
                                        </div>
                                        <div className='detailModal__inner-genres'>
                                            <span className='detailModal__inner-crewTitle'>
                                                Genres:{' '}
                                                {props?.match?.params?.type === 'movie' ?
                                                    movie?.genres && movie.genres?.length > 0 ? movie?.genres
                                                        ?.map((item, index) => {
                                                            if (index !== (movie.genres && movie.genres?.length - 1))
                                                                return <Link to={`/movie/${item.id}`} key={index} className='detailModal__inner-crewName'>{item.name},{' '}</Link>
                                                            else
                                                                return <Link to={`/movie/${item.id}`} key={index} className='detailModal__inner-crewName'>{item.name}.</Link>
                                                        })
                                                        :
                                                        <span className='detailModal__inner-crewName'>Not found</span>
                                                    :
                                                    tv?.genres && tv?.genres.length > 0 ? tv?.genres
                                                        ?.map((item, index) => {
                                                            if (index !== tv.genres?.length - 1)
                                                                return <Link to={`/tvshow/${item.id}`} key={index} className='detailModal__inner-crewName'>{item.name},{' '}</Link>
                                                            else
                                                                return <Link to={`/tvshow/${item.id}`} key={index} className='detailModal__inner-crewName'>{item.name}.</Link>
                                                        })
                                                        :
                                                        <span className='detailModal__inner-crewName'>Not found</span>
                                                }
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        <SkeletonLoading banner={true} />
                    }
                    {recomCheck && !recomLoad && mediaStateInfo ?
                        <div className='detailModal__inner-infoWrapper'>
                            <div className={more ? 'detailModal__inner-recommend add' : 'detailModal__inner-recommend'}>
                                <span className='detailModal__inner-recommendTitle'>Recommendation</span>
                                <div className='detailModal__inner-recommendItem'>
                                    {recommendation && recommendation?.length > 0 ?
                                        recommendation?.map((item, index) => {
                                            if (item.backdrop_path && item.poster_path)
                                                return <RecommendBox key={index} data={item} />
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
                        <SkeletonLoading mutilBox={true} />
                    }
                    {
                        connect && !detailLoad && mediaStateInfo ?
                            <div className='detailModal__inner-infoWrapper'>
                                <div className='detailModal__inner-final'>
                                    <h6 className='detailModal__inner-moreInfo'>
                                        More info about {props?.match?.params?.type === 'movie' ? movie?.original_title : tv?.name ? tv?.name : tv?.original_name}
                                    </h6>
                                    <p className='detailModal__inner-finalInfoCategory'>Director:{' '}
                                        {props?.match?.params?.type === 'movie' ?
                                            movie && movie?.crew.length > 0 ? movie?.crew.filter(item => item.job === 'Director').map((item, index) => {
                                                return <span key={index} className='detailModal__inner-crewName'>{item.name}.</span>
                                            })
                                                :
                                                <span className='detailModal__inner-crewName'>Not found</span>
                                            :
                                            tv && tv.created_by.length > 0 ?
                                                <span className='detailModal__inner-crewName'>
                                                    {tv.created_by[0].name}.</span> :
                                                <span className='detailModal__inner-crewName'>Not found</span>
                                        }
                                    </p>
                                    <p className='detailModal__inner-finalInfoCategory'>Actor:{' '}
                                        {props?.match?.params?.type === 'movie' ?
                                            movie && movie.cast.length > 0 ? movie?.cast?.map((item, index) => {
                                                if (index !== movie.cast?.length - 1) {
                                                    return <span key={index} className='detailModal__inner-crewName'>{item.name},{' '}</span>
                                                }
                                                else {
                                                    return <span key={index} className='detailModal__inner-crewName'>{item.name}.</span>
                                                }
                                            })
                                                :
                                                <span className='detailModal__inner-crewName'>Not found</span>
                                            :
                                            tv && tv.cast.length > 0 ? tv?.cast?.map((item, index) => {
                                                if (index !== tv.cast?.length - 1) {
                                                    return <span key={index} className='detailModal__inner-crewName'>{item.name},{' '}</span>
                                                }
                                                else {
                                                    return <span key={index} className='detailModal__inner-crewName'>{item.name}.</span>
                                                }
                                            })
                                                :
                                                <span className='detailModal__inner-crewName'>Not found</span>
                                        }
                                    </p>
                                    <p className='detailModal__inner-finalInfoCategory'>Genre:{' '}
                                        {props?.match?.params?.type === 'movie' ?
                                            movie?.genres && movie.genres?.length > 0 ? movie?.genres
                                                ?.map((item, index) => {
                                                    if (index !== (movie.genres && movie.genres?.length - 1))
                                                        return <Link to={`/movie/${item.id}`} key={index} className='detailModal__inner-crewName'>{item.name},{' '}</Link>
                                                    else
                                                        return <Link to={`/movie/${item.id}`} key={index} className='detailModal__inner-crewName'>{item.name}.</Link>
                                                })
                                                :
                                                <span className='detailModal__inner-crewName'>Not found</span>
                                            :
                                            tv?.genres && tv?.genres.length > 0 ? tv?.genres
                                                ?.map((item, index) => {
                                                    if (index !== tv.genres?.length - 1)
                                                        return <Link to={`/tvshow/${item.id}`} key={index} className='detailModal__inner-crewName'>{item.name},{' '}</Link>
                                                    else
                                                        return <Link to={`/tvshow/${item.id}`} key={index} className='detailModal__inner-crewName'>{item.name}.</Link>
                                                })
                                                :
                                                <span className='detailModal__inner-crewName'>Not found</span>
                                        }</p>
                                </div>
                            </div>
                            :
                            <SkeletonLoading />
                    }
                </div>
            }
            {connect === false && !detailLoad &&
                <span className='errTextCenter'>
                    Movie or tvshow not found
                </span>
            }
        </div>
    )
}
