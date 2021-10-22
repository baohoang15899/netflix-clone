export enum Urls {
    BASE = 'https://api.themoviedb.org/3/',
    MOVIE_POPULAR = 'movie/popular?',
    TV_POPULAR ='tv/popular?',
    RECOMMENDATION = 'recommendations?',
    SEARCH = 'search/multi?',
    REQUEST_TOKEN = 'authentication/token/new?',
    REQUEST_LOGIN = 'authentication/token/validate_with_login?',
    CREATE_SESSION = 'authentication/session/new?',
    ACCOUNT = 'account?',
    TRENDING = 'trending/all/day?',
    LOG_OUT = 'authentication/session?'
    // https://api.themoviedb.org/3/search/multi?api_key=<<api_key>>&language=en-US&query=batman&page=1&include_adult=false
}

export enum UrlImage {
    AVATAR = 'https://www.themoviedb.org/t/p/w150_and_h150_face/',
    TRENDING_BACKGROUND='https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/'
}