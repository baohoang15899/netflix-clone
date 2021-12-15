import { UrlImage } from 'api/Urls';
import { ImediaState, Irecommendation } from 'global/Home/Interfaces'
import React, { useEffect, useState } from 'react'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { mediaState } from 'api/Services';
import { useDispatch, useSelector } from 'react-redux';
import { homeAction } from 'Redux/homeReducer';
import { RootReducerModel } from 'Redux/rootReducer';

export default function RecommendationBox(props: { data: Irecommendation }) {
    const [favorite, setFavorite] = useState<boolean>(false)
    const [mediaStateInfo, setMediaStateInfo] = useState<ImediaState>()
    const user = useSelector((state: RootReducerModel) => state.authReducer.user)
    const dispatch = useDispatch()
    useEffect(() => {
        mediaState(props?.data?.media_type, props?.data?.id, setMediaStateInfo)
    }, [])

    useEffect(() => {
        if (mediaStateInfo?.favorite) {
            setFavorite(true)
        }
        else {
            setFavorite(false)
        }
    }, [mediaStateInfo])

    const handleFavorite = () => {
        if (favorite) {
            setFavorite(false)
            dispatch(homeAction.markFavoriteRequest({
                media_type: props?.data?.media_type,
                media_id: props?.data?.id,
                favorite: false,
                account_id: user.id
            }))
        }
        else {
            setFavorite(true)
            dispatch(homeAction.markFavoriteRequest({
                media_type: props?.data?.media_type,
                media_id: props?.data?.id,
                favorite: true,
                account_id: user.id
            }))
        }
    }

    return (
        <div className="recommendationBox">
            {props?.data?.poster_path && props?.data?.backdrop_path ?
                mediaStateInfo &&
                <>
                    <div className="recommendationBox__banner"
                        style={{
                            backgroundImage: ` linear-gradient(
                                0deg,rgba(0,0,0,1) 0,rgba(0,0,0,0) 100%),url(
                                    ${UrlImage.TRENDING_BACKGROUND}${props?.data?.backdrop_path}
                                    )`
                        }}
                    >
                    </div>
                    <div className='recommendationBox__block'>
                        <div className='recommendationBox__basicInfo'>
                            <h4 className="recommendationBox__title">
                                {props?.data?.media_type === 'movie' && props.data.original_title}
                                {props?.data?.media_type === 'tv' && props.data.name}
                            </h4>
                            <div className="recommendationBox__dateAdd">
                                <span>
                                    {props?.data?.media_type === 'tv' && props.data.first_air_date}
                                    {props?.data?.media_type === 'movie' && props.data.release_date}
                                </span>
                            </div>
                        </div>
                        <Icon
                            onClick={() => handleFavorite()}
                            className={favorite ? 'recommendationBox__favorite add' : 'recommendationBox__favorite'}
                            size="1x"
                            icon={faHeart} />
                    </div>
                    <div className="recommendationBox__overview">
                        <p>
                            {props?.data?.overview}
                        </p>
                    </div>
                </>
                : null
            }
        </div>
    )
}
