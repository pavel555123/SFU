import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RegisterSchema} from "@/features/authByUsername/model/types/registerSchema.ts";
import {registerUser} from "@/features/authByUsername/model/services/registerUser/registerUser.ts";

const initialState: RegisterSchema = {
    username: '',
    password: '',
    isLoading: false
}

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.isLoading = false
            })
            .addCase(registerUser.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const {actions: registerActions} = registerSlice
export const {reducer: registerReducer} = registerSlice
