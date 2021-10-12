import { IauthContentPage } from 'global/Interfaces'
import React from 'react'

export default function ContentAuthPage({
    title,
    description,
    img,
    videoCheck=false,
    decorCheck=false,
    decor=null,
    video='' }: IauthContentPage) {
    return (
        <div className="authContentPage__content">
            <div className="authContentPage__content-text">
                <h5 className="authContentPage__content-title">{title}</h5>
                <p className="authContentPage__content-description">{description}</p>
            </div>
            <div className="authContentPage__content-media">
                <img src={img} />
            </div>
        </div>
    )
}

