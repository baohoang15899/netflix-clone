import { UrlImage } from 'api/Urls'
import { IbannerData } from 'global/Home/Interfaces'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootReducerModel } from 'Redux/rootReducer'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faPlay, faExclamationCircle, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom'
import ClickOutSide from 'global/ClickOutSide'

export default function Banner({ data, genreMenu, id }: IbannerData) {
    const location = useLocation()
    const genres = useSelector((state: RootReducerModel) => state.homeReducer)
    const { genresTv, genresMovie } = genres
    const [showHeader, setShowHeader] = useState<Boolean>(false)
    const [menu, setMenu] = useState<Boolean>(false)
    const ref = useRef<any>()
    useEffect(() => {
        if (genreMenu) {
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
        }
    }, [window.scrollY])

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                setMenu(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [])

    useEffect(() => {
        setShowHeader(false)
    }, [id])

    const handleClick = () => {
        setMenu(prev => !prev)
    }

    return (
        <div className='home__banner'
            style={data && {
                backgroundImage: `
                linear-gradient(
                    0deg,rgba(0,0,0,1) 0,rgba(0,0,0,0) 100%),
                  url(${UrlImage.TRENDING_BACKGROUND}${data.backdrop_path})`
            }}>
            {
                data &&
                <>
                    {genreMenu &&
                        <div className={showHeader ? 'genreBar add' : 'genreBar'}>
                            <div className='container'>
                                <div className='genreBar__wrapper'>
                                    <h5 className='genreBar__mediatype'>{data.media_type === 'tv' ? 'Tv show' : 'movie'}</h5>
                                    <div ref={ref} onClick={() => handleClick()} className='genreBar__group'>
                                        <span className='genreBar__genres'>Genres</span>
                                        <Icon size="sm" icon={faCaretDown} />
                                        <ul className={menu ? 'genreBar__submenu add' : 'genreBar__submenu'}>
                                            {
                                                data.media_type === 'tv' ?
                                                    genresTv?.map(item => {
                                                        return <Link
                                                            className='genreBar__link'
                                                            onClick={() => window.scrollTo(0, 0)}
                                                            key={item.id}
                                                            to={`/tvshow/${item.id}`}>
                                                            {item.name}
                                                        </Link>
                                                    })
                                                    :
                                                    genresMovie?.map(item => {
                                                        return <Link
                                                            className='genreBar__link'
                                                            onClick={() => window.scrollTo(0, 0)}
                                                            key={item.id}
                                                            to={`/movie/${item.id}`}>
                                                            {item.name}
                                                        </Link>
                                                    })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    <div className='home__banner-content'>
                        <div className="container">
                            <h6 className='home__banner-title'>
                                {data.media_type === 'tv' ?
                                    data.name :
                                    data.title}
                            </h6>
                            <p className='home__banner-overview'>
                                {data.overview && data.overview}
                            </p>
                            <div className='home__banner-btnGroup'>
                                <div className='home__banner-btnTrailer'>
                                    <Icon style={{ marginRight: '10px' }} size="sm" icon={faPlay} />
                                    <span>Trailer</span>
                                </div>
                                <Link key={data?.id}
                                    to={{
                                        pathname: `/home/${data?.media_type}/${data?.id}`,
                                        state: { background: location }
                                    }} className='home__banner-btnDetail'>
                                    <Icon style={{ marginRight: '10px' }} size="sm" icon={faExclamationCircle} />
                                    <span>More info</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
