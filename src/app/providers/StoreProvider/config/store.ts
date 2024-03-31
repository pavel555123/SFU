import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from "./StateSchema.ts"
import {userReducer} from "@/entities/User"
import {loginReducer} from "@/features/authByUsername"
import {registerReducer} from "@/features/authByUsername/model/slice/registerSlice.ts";
import {$api} from "@/shared/api/api.ts"
import {NavigateOptions} from "react-router";
import {To} from "react-router-dom";

export function createReduxStore(
    initialState?: StateSchema,
    navigate?: (to: To, options?: NavigateOptions) => void
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        user: userReducer,
        loginForm: loginReducer,
        registerForm: registerReducer
    }

    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                    navigate
                }
            }
        })
    })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
