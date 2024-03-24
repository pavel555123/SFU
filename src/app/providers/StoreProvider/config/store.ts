import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from "./StateSchema.ts"
import {userReducer} from "@/entities/User"
import {loginReducer} from "@/features/authByUsername"

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        user: userReducer,
        loginForm: loginReducer
    }

    return configureStore<StateSchema>({
        reducer: rootReducer,
        preloadedState: initialState
    })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
