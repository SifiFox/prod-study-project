import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps{
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation();

    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />

            {

                readonly ? (
                    <Button
                        className={cls.editBtn}
                        onClick={onEdit}
                        theme={ThemeButton.OUTLINE}
                    >
                        {t('Редактировать')}
                    </Button>
                )
                    : (
                        <>
                            <Button
                                className={cls.editBtn}
                                onClick={onCancelEdit}
                                theme={ThemeButton.OUTLINE_RED}
                            >
                                {t('Отменить')}
                            </Button>

                            <Button
                                className={cls.saveBtn}
                                onClick={onSave}
                                theme={ThemeButton.OUTLINE}
                            >
                                {t('Сохранить')}
                            </Button>
                        </>
                    )
            }

        </div>
    );
};
