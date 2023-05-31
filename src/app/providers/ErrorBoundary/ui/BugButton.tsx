import { useEffect, useState } from "react";
import { Button } from "shared/ui/Button/Button";

interface BugButtonProps {
  className?: string;
}
// Компонент для тестирования обработки ошибок
export const BugButton = ({ className }: BugButtonProps) => {
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

  return <Button onClick={onThrow}>Throw error</Button>;
};
