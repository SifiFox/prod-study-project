import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps{
    username: string,
    password: string
}

enum LoginErrors {
    INCORRECT_DATA = '',
    SERVER_ERROR = ''
}

export const loginByUsername = createAsyncThunk<
        User,
        LoginByUsernameProps,
        ThunkConfig<string>
     >(
         '/login/loginByUsername',
         async (authData, thunkApi) => {
             const { dispatch, extra, rejectWithValue } = thunkApi;

             try {
                 const response = await extra.api.post<User>('/login', authData);

                 if (!response.data) {
                     throw new Error();
                 }

                 localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
                 dispatch(userActions.setAuthData(response.data));
                 return response.data;
             } catch (e) {
                 // return rejectWithValue(i18n.t('Вы ввели неверный логин или пароль'));
                 return rejectWithValue('error');
             }
         },
     );
