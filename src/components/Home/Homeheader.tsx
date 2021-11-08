import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducerModel } from 'Redux/rootReducer'
import Logo from 'components/Logo'
import { Link } from 'react-router-dom'
import DefaultAvatar from 'assets/image/avatar.png'
import { UrlImage } from 'api/Urls'
import ClickOutSide from 'global/ClickOutSide'
import { authAction } from 'Redux/authReducer'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Homeheader() {
    const { user, btnDisable } = useSelector((state: RootReducerModel) => state.authReducer)
    const [show, setShow] = useState<Boolean>(false)
    const [menuMobile, setMenuMobile] = useState<Boolean>(false)
    const [showSearch, setShowSearch] = useState<Boolean>(false)
    const [showHeader,setShowHeader] = useState<Boolean>(false)
    const ref = useRef<any>(null)
    const mobileRef = useRef<any>()
    const dispatch = useDispatch()
    ClickOutSide(mobileRef, setMenuMobile)

    useEffect(()=>{
        const handleScroll = () =>{
            if (window.scrollY > 0) {
                setShowHeader(true)
            }
            else{
                setShowHeader(false)
            }
        }
        document.addEventListener("scroll",handleScroll)
        return () => document.removeEventListener("scroll",handleScroll)
    },[window.scrollY])
    return (
        <div className={showHeader ? 'home__header add' : 'home__header'}>
            <div ref={mobileRef} className='home__header-left'>
                <Icon onClick={() => setMenuMobile(!menuMobile)} className='home__header-mobileBtn' icon={faBars} size="lg" />
                <div className={menuMobile ? 'home__header-menuMobile open' : 'home__header-menuMobile'}>
                    <div className="home__header-detailMobile">
                        <div className='home__header-avatarMobile'>
                            <div className='home__header-avatar'>
                                <img src={user.avatar.tmdb.avatar_path ? `${UrlImage.AVATAR}${user.avatar.tmdb.avatar_path}` : DefaultAvatar}
                                    alt="avatar" />
                            </div>
                            <p className='home__header-username'>{user.name ? user.name : user.username}</p>
                        </div>
                        <Link to='/home' className='home__header-detail'><span>Account Detail</span></Link>
                        <p className='home__header-logoutMobile'><span onClick={() => !btnDisable && dispatch(authAction.logOutRequest())}>Log out</span> </p>
                    </div>
                    <ul className='home__header-linkMobile'>
                        <Link className='home__header-link' to='/home'>Home</Link>
                        <Link className='home__header-link' to='/home'>Tv shows</Link>
                        <Link className='home__header-link' to='/home'>Movies</Link>
                        <Link className='home__header-link' to='/home'>My list</Link>
                    </ul>
                </div>
                <Logo custom={true} />
                <ul className='home__header-menu'>
                    <Link className='home__header-link' to='/home'>Home</Link>
                    <Link className='home__header-link' to='/home'>Tv shows</Link>
                    <Link className='home__header-link' to='/home'>Movies</Link>
                    <Link className='home__header-link' to='/home'>My list</Link>
                </ul>
            </div>
            <div className="home__header-mobileSearchGroup">
                <Icon icon={faSearch} />
                <input placeholder='Movie, Tvshow, Actor' className='home__header-search mobile' type='text' />
            </div>
            <div className='home__header-right'>
                <div className={showSearch ? 'home__header-searchGroup show' : 'home__header-searchGroup'}>
                    <Icon onClick={() => { setShowSearch(!showSearch) }} style={{ cursor: 'pointer' }} icon={faSearch} />
                    <input placeholder='Movie, Tvshow, Actor' className={showSearch ? 'home__header-search show' : 'home__header-search'} type='text' />
                </div>
                <div className='home__header-avatarGroup'>
                    <div className='home__header-avatar'>
                        <img src={user.avatar.tmdb.avatar_path ? `${UrlImage.AVATAR}${user.avatar.tmdb.avatar_path}` : DefaultAvatar}
                            alt="avatar" />
                    </div>
                    <span className="home__header-triangle"></span>
                    <p className='home__header-username'>{user.name ? user.name : user.username}</p>
                    <div className='home__header-dropdown'>
                        <Link to='/home' className='home__header-detail'><span>Account Detail</span></Link>
                        <p className='home__header-detail'><span onClick={() => !btnDisable && dispatch(authAction.logOutRequest())} >Log out</span> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
