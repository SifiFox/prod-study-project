import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/user';

export interface userState {
  value: number
}

const initialState: UserSchema = {
    authData: {
        id: '1',
        username: 'test',
    },
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;