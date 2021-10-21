export interface IauthContentPage {
    title: string,
    description: string,
    img?: string,
    decor?: any,
    video?: string,
    reverse?: Boolean
}

export interface IauthQuestion {
    title: string,
    content: string,
    secondContent?: string
}

export interface IfooterContentType {
    title: string
}

export interface IfooterContent {
    contentData: Array<IfooterContentType>
}

export interface IauthReducer {
    isLoggedIn: Boolean,
    isLoading: Boolean,
    user: any,
    accountExist:Boolean,
    btnDisable:Boolean
}

export interface irootReducer {
    authReducer: IauthReducer
}

export interface IloginService {
    username: string,
    password: string,
    request_token: string
}

export interface IcreateSessionService {
    request_token: string
}