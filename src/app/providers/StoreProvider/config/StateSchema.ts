import {UserSchema} from "@/entities/User"
import {LoginSchema} from "@/features/authByUsername/model/types/loginSchema.ts";

export interface StateSchema {
    user: UserSchema,
    loginForm: LoginSchema
}

// export interface CounterState {
//     value: number
// }
