import {ReactNode} from "react"
import {Provider} from "react-redux";
import {createReduxStore} from "@/app/providers/StoreProvider/config/store.ts";
import {StateSchema} from "@/app/providers/StoreProvider/config/StateSchema.ts";
import {useNavigate} from "react-router"

interface StoreProviderProps {
    children?: ReactNode
    initialState?: StateSchema
}

export const StoreProvider = ({children, initialState}: StoreProviderProps) => {
    const navigate = useNavigate()

    const store = createReduxStore(
        initialState as StateSchema,
        navigate
    )

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
