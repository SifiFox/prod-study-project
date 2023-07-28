import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

interface SelectOption {
    value: string;
    content: string
}

interface SelectProps{
    className?: string;
    label?: string;
    options: SelectOption[];
    value?: string
    onChange?: (value: string) => void
    readonly?: boolean
}

export const Select = memo((props: SelectProps) => {
    const {
        className, label, options, value, onChange, readonly,
    } = props;

    const onChangeHandler = (e:ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const optionList = useMemo(() => options?.map((opt) => (
        <option
            className={cls.option}
            key={opt.value}
            value={opt.value}
        >
            {opt.content}

        </option>
    )), [options]);

    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            {
                label
                && <span className={cls.label}>{`${label}>`}</span>
            }

            <select
                value={value}
                onChange={onChangeHandler}
                className={cls.select}
                disabled={readonly}
            >
                {optionList}
            </select>

        </div>
    );
});
