import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

import { loginByUsername }
    from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { TextTheme, Text } from 'shared/ui/Text/Text';
import { getLoginPassword }
    from 'features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading }
    from 'features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError/getLoginError';
import { DynamicModuleLoader, ReducerList }
    from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getLoginUsername }
    from '../../model/selectors/getLoginUsername/getLoginUsername';
import cls from './LoginForm.module.scss';

export interface LoginFormProps{
    className?: string;
}
const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    const initialReducers: ReducerList = {
        loginForm: loginReducer,
    };

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Форма авторизации')} />
                {
                    error && <Text text={error} theme={TextTheme.ERROR} />
                }

                <Input
                    placeholder={t('Введите username')}
                    onChange={onChangeUsername}
                    type="text"
                    className={cls.input}
                    autofocus
                    value={username}
                />
                <Input
                    placeholder={t('Введите пароль')}
                    onChange={onChangePassword}
                    type="text"
                    className={cls.input}
                    autofocus={false}
                    value={password}
                />
                <Button
                    onClick={onLoginClick}
                    theme={ThemeButton.OUTLINE}
                    className={cls.loginBtn}
                    disabled={isLoading || false}
                >
                    {t('Войти')}

                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
