export interface IinputLogin{
    placeholder:string,
    onChangeText:(e:any) => void,
    text?:any
    passwordInput?:Boolean,
    showErr?:string,
    value:string,
    onKeyDown?:(e:any) => void,
}