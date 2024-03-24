import {StateSchema} from "@/app/providers/StoreProvider/config/StateSchema.ts"
import {TypedUseSelectorHook, useSelector} from "react-redux"

export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector
