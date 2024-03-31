import {UserSchema} from "@/entities/User"
import {LoginSchema} from "@/features/authByUsername/model/types/loginSchema.ts";
import {RegisterSchema} from "@/features/authByUsername/model/types/registerSchema.ts";
import {AxiosInstance} from "axios";
import {To} from "react-router-dom";
import {NavigateOptions} from "react-router";

export interface StateSchema {
    user: UserSchema,
    loginForm: LoginSchema,
    registerForm: RegisterSchema
}

export interface ThunkExtraArg {
    api: AxiosInstance,
    navigate: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
    state: StateSchema
    extra: ThunkExtraArg
    rejectValue: T
}
