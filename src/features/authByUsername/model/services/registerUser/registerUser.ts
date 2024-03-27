import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'
import {User} from "@/entities/User";

interface RegisterUserProps {
    username: string
    password: string
}

export const registerUser = createAsyncThunk<
    User, RegisterUserProps, { rejectValue: string | undefined }
>(
    'register/registerUser',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/register', authData)

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(String(e))
        }
    },
)
