import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";

export const ThemeDecorator = (theme: Theme) => (Story: any) => {
  return (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  );
};
