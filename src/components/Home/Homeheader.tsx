import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { RootReducerModel } from 'Redux/rootReducer'
import Logo from 'components/Logo'
import { Link } from 'react-router-dom'
import DefaultAvatar from 'assets/image/avatar.png'
import { UrlImage } from 'api/Urls'
import ClickOutSide from 'global/ClickOutSide'


export default function Homeheader() {
    const { user } = useSelector((state: RootReducerModel) => state.authReducer)
    const [show, setShow] = useState<Boolean>(false)
    const ref = useRef<any>(null)
    ClickOutSide(ref, setShow)
    return (
        <div className='home__header'>
            <div className='home__header-left'>
                <Logo custom={true} />
                <ul className='home__header-menu'>
                    <Link className='home__header-link' to='/home'>Home</Link>
                    <Link className='home__header-link' to='/home'>Tv shows</Link>
                    <Link className='home__header-link' to='/home'>Movies</Link>
                    <Link className='home__header-link' to='/home'>My list</Link>
                </ul>
            </div>
            <div className='home__header-right'>
                <div ref={ref} onClick={() => setShow(!show)} className='home__header-avatarGroup'>
                    <div className='home__header-avatar'>
                        <img src={user.avatar.tmdb.avatar_path ? `${UrlImage.AVATAR}${user.avatar.tmdb.avatar_path}` : DefaultAvatar}
                            alt="avatar" />
                    </div>
                    <span className={show ? "home__header-triangle rotate" : 'home__header-triangle'}></span>
                    <p className='home__header-username'>{user.name ? user.name : user.username}</p>
                    <div className={show ? 'home__header-dropdown show' : 'home__header-dropdown'}>
                        <Link to='/home' className='home__header-detail'>Account Detail</Link>
                        <Link to='/home' className='home__header-detail'>Log out </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
