export interface IprivateRouter {
    component:any,
    auth:Boolean
}

export interface IhomeReducer{
    trending:any
}

interface Ibanner{
    backdrop_path:string,
    title?:string,
    name?:string,
    overview?:string,
    id?:any,
    media_type?:string
}

export interface IbannerData{
    data:Ibanner
}