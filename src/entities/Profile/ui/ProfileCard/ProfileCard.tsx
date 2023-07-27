import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from 'entities/Profile/model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from 'entities/Currency/model/types/currency';
import { CurrencySelect } from 'entities/Currency/ui/CurrencySelect/CurrencySelect';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps{
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void
    onChangeAge?: (value?: string) => void
    onChangeCity?: (value?: string) => void
    onChangeUsername?: (value?: string) => void
    onChangeAvatar?: (value?: string) => void

}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, { }, [className, cls.error])}>
                <Text
                    align={TextAlign.CENTER}
                    title={t('Произошла непредвиденная ошибка')}
                    text={t('Попробуйте обновить страницу')}
                    theme={TextTheme.ERROR}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>

            <div className={cls.data}>
                {
                    data?.avatar
                    && (
                        <div className={cls.avatarWrapper}>
                            <Avatar src={data?.avatar} alt="" />
                        </div>
                    )
                }

                <Input
                    value={data?.firstname}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                    onChange={onChangeFirstname}
                    autofocus={false}
                    readonly={readonly}
                />

                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                    onChange={onChangeLastname}
                    autofocus={false}
                    readonly={readonly}

                />

                <Input
                    value={data?.age}
                    placeholder={t('Ваш возраст')}
                    className={cls.input}
                    onChange={onChangeAge}
                    autofocus={false}
                    readonly={readonly}
                />

                <Input
                    value={data?.city}
                    placeholder={t('Город')}
                    className={cls.input}
                    onChange={onChangeCity}
                    autofocus={false}
                    readonly={readonly}
                />

                <Input
                    value={data?.username}
                    placeholder={t('Имя пользователя')}
                    className={cls.input}
                    onChange={onChangeUsername}
                    autofocus={false}
                    readonly={readonly}
                />

                <Input
                    value={data?.avatar}
                    placeholder={t('Ссылка на аватар')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    autofocus={false}
                    readonly={readonly}
                />

                <CurrencySelect />
            </div>
        </div>
    );
};
