import { IauthContentPage } from 'global/Interfaces'
import React from 'react'

export default function ContentAuthPage({
    title,
    description,
    img,
    decor,
    video,
    reverse }: IauthContentPage) {
    return (
        <div className="authContentPage__content">
            <div className={reverse ?
                'authContentPage__content-wrapper reverse' :
                'authContentPage__content-wrapper'}>
                <div className="authContentPage__content-text">
                    <h5 className="authContentPage__content-title">{title}</h5>
                    <p className="authContentPage__content-description">{description}</p>
                </div>
                <div className="authContentPage__content-media">
                    {img &&
                        <img src={img} />
                    }
                    {video &&
                        <div className="authContentPage__content-video">
                            <video autoPlay loop muted playsInline>
                                <source src={video} type="video/mp4" />
                            </video>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

