import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from 'entities/Currency/model/types/currency';
import { memo, useCallback } from 'react';

interface CurrencySelectProps{
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(({ className, value, onChange }: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(() => {
        onChange?.(value as Currency);
    }, [onChange, value]);

    return (
        <Select
            value={value}
            label={t('Укажите валюту')}
            options={options}
            className={classNames('', {}, [className])}
            onChange={onChangeHandler}
        />
    );
});
