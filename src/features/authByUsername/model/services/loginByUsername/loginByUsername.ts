import {createAsyncThunk} from "@reduxjs/toolkit";
import axios, {AxiosError} from 'axios'
import {User} from "@/entities/User";

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<
    User, LoginByUsernameProps, { rejectValue: AxiosError | undefined }
>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData)

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e)
        }
    },
)
