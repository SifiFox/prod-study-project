import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useState } from 'react';
import cls from './LoginForm.module.scss';

interface LoginFormProps{
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                placeholder={t('Введите username')}
                onChange={onChange}
                type="text"
                className={cls.input}
                autofocus
            />
            <Input
                placeholder={t('Введите username')}
                onChange={onChange}
                type="text"
                className={cls.input}
                autofocus={false}
            />
            <Button className={cls.loginBtn}>{t('Войти')}</Button>
        </div>
    );
};
