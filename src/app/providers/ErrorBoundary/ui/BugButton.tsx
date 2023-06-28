import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

const textError = 'Throw error';

// Компонент для тестирования обработки ошибок
export const BugButton = () => {
    const [error, setError] = useState(false);
    const onThrow = () => {
        setError(true);
    };

    useEffect(() => {
    // console.log(error);

        if (error) {
            throw new Error();
        }
    }, [error]);

    return <Button onClick={onThrow}>{textError}</Button>;
};
