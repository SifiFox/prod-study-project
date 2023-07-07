import { Mods, classNames } from 'shared/lib/classNames/classNames';

import {
    ButtonHTMLAttributes, FC, ReactNode, memo,
} from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  L = 'size_l',
  M = 'size_m',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ThemeButton.OUTLINE,
        square,
        size = ButtonSize.M,
        disabled,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[size]]: true,
        [cls.square]: square,
        [cls.disabled]: disabled,
    };

    return (
    // eslint-disable-next-line react/button-has-type
        <button
            className={classNames(cls.Button, mods, [className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
