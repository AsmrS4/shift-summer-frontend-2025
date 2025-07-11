export interface SessionProps {
    isAuth: boolean,
    token: string | null,
    error: string | null
}

export interface LoginProps {
    phone: string,
    code: number | string
}

export interface UserProps {
    phone: string,
    firstname:string,
    lastname: string,
    middlename?: string,
    email?:string
    city:string
}