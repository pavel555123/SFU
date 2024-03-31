import {StateSchema} from "@/app/providers/StoreProvider/config/StateSchema.ts";

export const getUserAuthData = (state: StateSchema) => state.user.authData
