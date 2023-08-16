import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    '/profile/fetchProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        try {
            const response = await extra.api.get<Profile>('/profile');

            if (!response.data) {
                throw new Error('error');
            }

            return response.data;
        } catch (e) {
            // return rejectWithValue(i18n.t('Вы ввели неверный логин или пароль'));
            return rejectWithValue('error');
        }
    },
);
