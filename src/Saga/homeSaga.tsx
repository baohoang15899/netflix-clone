import { allMovieRequest, getFavorite, getGenresMovieRequest, getGenresTvRequest, getMovieByGenre, getMovieByGenreRequest, getSearchData, getTrendingData, getTrendingMovie, getTrendingTvShow, getTvByGenreRequest, getTvShowByGenre } from 'api/Services'
import { takeLatest, call, put, select, take, takeEvery, delay } from 'redux-saga/effects'
import { homeAction } from 'Redux/homeReducer'

interface Response {
    data?: any,
    status?: number
}

interface MoviesAndTvshows {
    movies?: Response,
    tvShows?: Response
}

function* getTrending() {
    try {
        const res: Response = yield call(getTrendingData)
        if (res?.status === 200) {
            yield put(homeAction.trendingDataSuccess(res.data))
        }
    } catch (error) {
        console.log(error);
    }
}

function* getMovieandTvTrending() {
    yield put(homeAction.startLoadingPopuplar())
    try {
        const res: MoviesAndTvshows = yield call(allMovieRequest)
        if (res.movies?.status === 200 && res.tvShows?.status === 200) {
            const data: Object = {
                movies: res.movies.data,
                tvShows: res.tvShows.data
            }
            yield put(homeAction.getTrendingMovieAndTvshowDataSuccess(data))
        }
    } catch (error) {
        console.log(error);
    }
    finally {
        yield put(homeAction.stopLoadingPopular())
    }
}

function* getGenreMovie() {
    try {
        const res: Response = yield call(getGenresMovieRequest)
        if (res?.status === 200) {
            yield put(homeAction.getGenresMovieSuccess(res.data.genres))
        }
    } catch (error) {
        console.log(error);

    }
}

function* getGenreTv() {
    yield put(homeAction.startLoadingGenreTv())
    try {
        const res: Response = yield call(getGenresTvRequest)
        if (res?.status === 200) {
            yield put(homeAction.getGenresTvSuccess(res.data.genres))
        }
    } catch (error) {
        console.log(error);
    }
    finally {
        yield put(homeAction.stopLoadingGenreTv())
    }
}

function* getMovie() {
    yield put(homeAction.startLoadingGenreMovie())
    const res: Response = yield getMovieByGenreRequest()
    try {
        if (res) {
            yield put(homeAction.getMoviesByGenreSuccess(res))
        }
    } catch (error) {
        console.log(error);
    }
    finally {
        yield put(homeAction.stopLoadingGenreMovie())
    }
}

function* getTvshows() {
    const res: Response = yield getTvByGenreRequest()
    try {
        if (res) {
            yield put(homeAction.getTvByGenreSuccess(res))
        }
    } catch (error) {
        console.log(error);
    }
    finally {

    }
}

function* getTrendingTvShowData() {
    try {
        const res: Response = yield call(getTrendingTvShow)
        if (res?.status === 200) {
            yield put(homeAction.tredingTvshowSuccess(res.data))
        }
    } catch (error) {
        console.log(error);
    }
}

function* getTrendingMovieData() {
    try {
        const res: Response = yield call(getTrendingMovie)
        if (res?.status === 200) {
            yield put(homeAction.tredingMovieSuccess(res.data))
        }
    } catch (error) {
        console.log(error);
    }
}

function* getGenreTvshowData({ payload }: any) {
    yield put(homeAction.startLoadingTvshowPage())
    try {
        const res: Response = yield getTvShowByGenre(payload)
        if (res?.status === 200) {
            if (payload.page <= res.data.total_pages) {
                yield put(homeAction.getGenreTvshowsSuccess(res.data.results))
            }
        }
    } catch (error) {
        console.log(error);
    }
    finally {
        yield put(homeAction.stopLoadingTvshowPage())
    }
}

function* getGenreMovieData({ payload }: any) {
    yield put(homeAction.startLoadingMoviePage())
    try {
        const res: Response = yield getMovieByGenre(payload)
        if (res?.status === 200) {
            if (payload.page <= res.data.total_pages) {
                yield put(homeAction.getGenreMoviesSuccess(res.data.results))
            }
        }
    } catch (error) {
        console.log(error);
    }
    finally {
        yield put(homeAction.stopLoadingMoviePage())
    }
}

function* searchRequest({ payload }: any) {
    yield put(homeAction.startSearchLoad())
    try {
        const res: Response = yield getSearchData(payload)
        if (res.status === 200) {
            if (payload.page <= res.data.total_pages) {
                yield put(homeAction.getSearchSuccess(res.data.results))
            }
        }
    } catch (error) {
        console.log(error);
    }
    finally {
        yield put(homeAction.stopSearchLoad())
    }
}

function* favoriteMovieRequest({ payload }: any) {
    yield put(homeAction.startMovieFavoriteLoad())
    try {
        const res: Response = yield getFavorite(payload)
        if (res.status === 200) {
            if (payload.page <= res.data.total_pages) {
                yield put(homeAction.getMovieFavoriteSuccess(res.data.results))
            }
        }
    } catch (error) {
        console.log(error);
    }
    finally {
        yield put(homeAction.stopMovieFavoriteLoad())
    }
}

function* favoriteTvRequest({ payload }: any) {
    yield put(homeAction.startTvFavoriteLoad())
    try {
        const res: Response = yield getFavorite(payload)
        if (res.status === 200) {
            if (payload.page <= res.data.total_pages) {
                yield put(homeAction.getTvFavoriteSuccess(res.data.results))
            }
        }
    } catch (error) {
        console.log(error);
    }
    finally {
        yield put(homeAction.stopTvFavoriteLoad())
    }
}

function* homeSaga() {
    yield takeLatest(homeAction.getTrendingRequest, getTrending)
    yield takeLatest(homeAction.getTrendingMovieAndTvshowRequest, getMovieandTvTrending)
    yield takeLatest(homeAction.getGenresMovieRequest, getGenreMovie)
    yield takeLatest(homeAction.getGenresTvRequest, getGenreTv)
    yield takeLatest(homeAction.getMoviesByGenreRequest, getMovie)
    yield takeLatest(homeAction.getTvByGenreRequest, getTvshows)
    yield takeLatest(homeAction.getTrendingTvshowRequest, getTrendingTvShowData)
    yield takeLatest(homeAction.getTrendingMovieRequest, getTrendingMovieData)
    yield takeLatest(homeAction.getGenreTvshowsRequest, getGenreTvshowData)
    yield takeLatest(homeAction.getGenreMoviesRequest, getGenreMovieData)
    yield takeLatest(homeAction.getSearchRequest, searchRequest)
    yield takeLatest(homeAction.getMovieFavoriteRequest,favoriteMovieRequest)
    yield takeLatest(homeAction.getTvFavoriteRequest,favoriteTvRequest)
}

export default homeSaga