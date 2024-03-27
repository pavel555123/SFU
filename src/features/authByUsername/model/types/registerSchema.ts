import {AxiosError} from "axios";

export interface RegisterSchema {
    username: string
    password: string
    isLoading: boolean
    error?: AxiosError
}
