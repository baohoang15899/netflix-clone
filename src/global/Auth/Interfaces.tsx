export interface IauthContentPage {
    title:string,
    description:string,
    img?:string,
    decor?:any,
    video?:string,
    reverse?:Boolean
}

export interface IauthQuestion {
    title:string,
    content:string,
    secondContent?:string
}

export interface IfooterContentType{
    title:string
}

export interface IfooterContent{
    contentData:Array<IfooterContentType>
}

