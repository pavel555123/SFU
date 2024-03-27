import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from "./StateSchema.ts"
import {userReducer} from "@/entities/User"
import {loginReducer} from "@/features/authByUsername"
import {registerReducer} from "@/features/authByUsername/model/slice/registerSlice.ts";

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        user: userReducer,
        loginForm: loginReducer,
        registerForm: registerReducer
    }

    return configureStore<StateSchema>({
        reducer: rootReducer,
        preloadedState: initialState
    })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
