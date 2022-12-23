import { createContext, useState } from "react";
import {
  IProviderProps,
  IThemeDarkContext,
} from "../interfaces/Context.interfaces";

export const ThemeDarkContext = createContext<IThemeDarkContext>(
  {} as IThemeDarkContext
);

export const ThemeDarkProvider = ({ children }: IProviderProps) => {
  const [theme, setTheme] = useState<string>("");

  return (
    <ThemeDarkContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeDarkContext.Provider>
  );
};
