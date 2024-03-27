import {AxiosError} from "axios";

export interface LoginSchema {
    username: string
    password: string
    isLoading: boolean
    error?: AxiosError
}
