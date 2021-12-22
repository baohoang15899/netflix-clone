import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import Star from './Star'
interface btnModal {
    component: any,
    onClick?: () => void,
    cb?: any,
}

export default function DetailModalBtn({ component: Component, onClick }: btnModal) {
    return (
        <>
            <div onClick={onClick} className='detailModal__inner-btnAdd'>
                {Component}
            </div>
        </>
    )
}
