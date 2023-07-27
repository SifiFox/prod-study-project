import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps{
    className?: string;
    src?: string;
    size?: number;
    alt?: string
}

export const Avatar = (props: AvatarProps) => {
    const {
        className, size, src, alt,
    } = props;
    const { t } = useTranslation();

    const styles = useMemo(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return (
        <img
            style={styles}
            className={classNames(cls.Avatar, {}, [className])}
            src={src}
            alt={alt}
        />
    );
};
