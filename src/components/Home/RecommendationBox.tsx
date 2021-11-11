import { UrlImage } from 'api/Urls';
import { Irecommendation } from 'global/Home/Interfaces'
import React from 'react'

export default function RecommendationBox(props: { data: Irecommendation }) {
    console.log(props.data);
    return (
        <div className="recommendationBox">
            {props?.data?.poster_path && props?.data?.backdrop_path &&
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
                    <div className="recommendationBox__overview">
                        <p>
                            {props?.data?.overview}
                        </p>
                    </div>
                </>
            }
        </div>
    )
}
