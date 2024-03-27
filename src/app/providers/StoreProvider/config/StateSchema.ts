import {UserSchema} from "@/entities/User"
import {LoginSchema} from "@/features/authByUsername/model/types/loginSchema.ts";
import {RegisterSchema} from "@/features/authByUsername/model/types/registerSchema.ts";

export interface StateSchema {
    user: UserSchema,
    loginForm: LoginSchema,
    registerForm: RegisterSchema
}

// export interface CounterState {
//     value: number
// }
