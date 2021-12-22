import { UrlImage } from 'api/Urls';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducerModel } from 'Redux/rootReducer'
import DefaultAvatar from 'assets/image/avatar.png'
import { homeAction } from 'Redux/homeReducer';
import { ApiResponse, getFavorite, getRated, getUpcoming } from 'api/Services';
import { IdataResults } from 'global/Home/Interfaces';
import DefaultPoster from 'assets/image/defaultPoster.jpg'
import SkeletonLoading from 'components/Home/SkeletonLoading';
import { Link, useLocation } from 'react-router-dom';

const Info = (number: number, title: string) => {
    return (
        <div className='account__content-statDetail'>
            <span className='account__content-statDetailTitle'>{title}</span>
            <span className='account__content-statDetailTotal'>{number ? number : 0}</span>
        </div>
    )
}

export default function Index() {
    const [totalMovie, setTotalMovie] = useState(0)
    const [totalTv, setTotalTv] = useState(0)
    const [totalMovieRated, setTotalMovieRated,] = useState(0)
    const [totalTvRated, setTotalTvRated,] = useState(0)
    const user = useSelector((state: RootReducerModel) => state.authReducer.user)
    const [upcoming, setUpcoming] = useState<IdataResults>()
    const [load, setLoad] = useState<boolean>(false)
    const location = useLocation()
    const getAll = async () => {
        setLoad(true)
        try {
            const data: ApiResponse[] = await Promise.all([
                getFavorite({ type: 'movies', account_id: user.id, page: 1 }),
                getFavorite({ type: 'tv', account_id: user.id, page: 1 }),
                getRated({ type: 'movies', account_id: user.id, page: 1 }),
                getRated({ type: 'tv', account_id: user.id, page: 1 }),
                getUpcoming()
            ])
            setTotalMovie(data[0].data.total_results)
            setTotalTv(data[1].data.total_results)
            setTotalMovieRated(data[2].data.total_results)
            setTotalTvRated(data[3].data.total_results)
            setUpcoming(data[4].data.results && data[4].data.results[0])
        } catch (error) {
            console.log(error);
        }
        finally {
            setLoad(false)
        }
        // getFavorite({ type: 'movies', account_id: user.id, page: 1 })
        //     .then(data => setTotalMovie(data.data.total_results))
        // getFavorite({ type: 'tv', account_id: user.id, page: 1 })
        //     .then(data => setTotalTv(data.data.total_results))
        // getRated({ type: 'movies', account_id: user.id, page: 1 })
        //     .then(data => setTotalMovieRated(data.data.total_results))
        // getRated({ type: 'tv', account_id: user.id, page: 1 })
        //     .then(data => setTotalTvRated(data.data.total_results))
        // getUpcoming().then(data =>
        //     setUpcoming(data.data.results && data.data.results[0])
        // ).finally(() => setLoad(false))
    }

    useEffect(() => {
        window.scrollTo(0,0)
        getAll()
    }, [])

    return (
        <div className='account'>
            <div className="container">
                <div className='account__content'>
                    <div className='account__content-form'>
                        <div className='account__content-firstSection'>
                            <div className='account__content-titleWrapper'>
                                <span className='account__content-formTitle'>Account Detail</span>
                                <span className='account__content-name'>{user.name ? user.name : user.username}</span>
                                <span className='account__content-country'>Country: {user.iso_3166_1 ? user.iso_3166_1 : 'unknown'}</span>
                            </div>
                            <div className='account__content-avatarWrapper'>
                                <img className='account__content-avatar' src={user.avatar.tmdb.avatar_path ? `${UrlImage.AVATAR}${user.avatar.tmdb.avatar_path}` : DefaultAvatar} />
                            </div>
                        </div>
                        <div className='account__content-secondSection'>
                            <span className='account__content-stat'>
                                Stats
                            </span>
                            {!load &&
                                <div className='account__content-number'>
                                    {Info(totalMovie, 'Favorite Movies')}
                                    {Info(totalTv, 'Favorite Tvshow')}
                                    {Info(totalTvRated + totalMovieRated, 'Total Ratings')}
                                </div>
                            }
                            {
                                load &&
                                <span className='account__content-number'>Loading...</span>
                            }
                        </div>
                        {
                            upcoming && !load &&
                            <div className='account__content-upcoming'>
                                <span className='account__content-upcomingTitle'>
                                    Checkout Upcoming Movie
                                </span>
                                <div className='account__content-detailUpcomingMovie'>
                                    <div className='account__content-upcomimgImg'>
                                        <Link key={upcoming.id}
                                            to={{
                                                pathname: `/home/movie/${upcoming.id}`,
                                                state: { background: location, }
                                            }}>
                                            <img src={upcoming.poster_path ? `${UrlImage.POSTER}${upcoming?.poster_path}` : DefaultPoster} alt="" />
                                        </Link>
                                    </div>
                                    <div className='account__content-info'>
                                        <span className='account__content-infoTitle'>{upcoming.original_title}</span>
                                        <span className='account__content-infoDate'>{upcoming.release_date}</span>
                                        <p className='account__content-infoOverview'>{upcoming.overview}</p>
                                    </div>
                                </div>
                            </div>

                        }
                        {
                            load &&
                            <SkeletonLoading noTitle={true} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
