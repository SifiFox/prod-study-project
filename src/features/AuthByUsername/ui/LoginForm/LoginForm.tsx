import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
// eslint-disable-next-line max-len
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { TextTheme, Text } from 'shared/ui/Text/Text';
import cls from './LoginForm.module.scss';

interface LoginFormProps{
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, isLoading, error,
    } = useSelector(getLoginState);
    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
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
                disabled={isLoading}
            >
                {t('Войти')}

            </Button>
        </div>
    );
});
