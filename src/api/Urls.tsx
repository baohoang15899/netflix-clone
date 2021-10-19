export enum Urls {
    BASE = 'https://api.themoviedb.org/3/',
    MOVIE_POPULAR = 'movie/popular?',
    TV_POPULAR ='tv/popular?',
    RECOMMENDATION = 'recommendations?',
    SEARCH = 'search/multi?',
    REQUEST_TOKEN = 'authentication/token/new?',
    REQUEST_LOGIN = 'authentication/token/validate_with_login?',
    CREATE_SESSION = 'authentication/session/new?'
    // https://api.themoviedb.org/3/search/multi?api_key=<<api_key>>&language=en-US&query=batman&page=1&include_adult=false
}