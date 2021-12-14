import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducerModel } from 'Redux/rootReducer'
import Logo from 'components/Logo'
import { Link, useHistory,useLocation } from 'react-router-dom'
import DefaultAvatar from 'assets/image/avatar.png'
import { UrlImage } from 'api/Urls'
import { authAction } from 'Redux/authReducer'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons'
import { homeAction } from 'Redux/homeReducer'

export default function Homeheader({background}:any) {
    const { user, btnDisable } = useSelector((state: RootReducerModel) => state.authReducer)
    const [menuMobile, setMenuMobile] = useState<Boolean>(false)
    const [showSearch, setShowSearch] = useState<Boolean>(false)
    const [showHeader, setShowHeader] = useState<Boolean>(false)
    const [text, setText] = useState<string>('')
    const mobileRef = useRef<any>()
    const history = useHistory()
    const dispatch = useDispatch()
    const location = useLocation()
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (mobileRef.current && !mobileRef.current.contains(event.target)) {
                setMenuMobile(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [])

    useEffect(() => {
        if (!location.pathname.includes('search') && !background) {
           setText('')
        }
    }, [location])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setShowHeader(true)
            }
            else {
                setShowHeader(false)
            }
        }
        document.addEventListener("scroll", handleScroll)
        return () => document.removeEventListener("scroll", handleScroll)
    }, [window.scrollY])

    const regexCheck = (text:string) =>{
        const pattern = /[/,?~<>]/
        const res = pattern.test(text)
        let result = res ? text.replace(pattern,'') : text
        return result
    }

    const handleSearch = () => {
        if (text.length > 0) {
            const res = regexCheck(text)
            if (res.length > 0) {
                history.push({pathname:`/search/${res}`})
            }
        }
    }

    const handleEnter = (e:any) =>{
        if (text.length > 0 && e.key === 'Enter') {
            const res = regexCheck(text)
            if (res.length > 0) {
                history.push({pathname:`/search/${res}`})
            }
        }
    }

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
                        <Link className='home__header-link' to='/tvshow/10759'>Tv shows</Link>
                        <Link className='home__header-link' to='/movie/28'>Movies</Link>
                        <Link className='home__header-link' to='/home'>My list</Link>
                        <Link className='home__header-link' to='/favorite'>Favorite</Link>
                    </ul>
                </div>
                <Logo custom={true} />
                <ul className='home__header-menu'>
                    <Link className='home__header-link' to='/home'>Home</Link>
                    <Link className='home__header-link' to='/tvshow/10759'>Tv shows</Link>
                    <Link className='home__header-link' to='/movie/28'>Movies</Link>
                    <Link className='home__header-link' to='/home'>My list</Link>
                    <Link className='home__header-link' to='/favorite'>Favorite</Link>
                </ul>
            </div>
            <div className="home__header-mobileSearchGroup">
                <Icon icon={faSearch} />
                <input onKeyDown={(e) => handleEnter(e)} value={text} onChange={(e) => setText(e.target.value)} placeholder='Movie, Tvshow, Actor' className='home__header-search mobile' type='text' />
                <button onClick={() => handleSearch()} className='home__header-searchBtnMobile'>Search</button>
            </div>
            <div className='home__header-right'>
                <div className={showSearch ? 'home__header-searchGroup show' : 'home__header-searchGroup'}>
                    <Icon onClick={() => { setShowSearch(!showSearch) }} style={{ cursor: 'pointer' }} icon={faSearch} />
                    <input onKeyDown={(e) => handleEnter(e)} value={text} onChange={(e) => setText(e.target.value)} placeholder='Movie, Tvshow, Actor' className={showSearch ? 'home__header-search show' : 'home__header-search'} type='text' />
                    <button onClick={() => handleSearch()} className='home__header-searchBtn'>Search</button>
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
