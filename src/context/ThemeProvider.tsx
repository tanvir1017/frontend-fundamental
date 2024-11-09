import React from "react";

export type TThemeValue = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};
export const ThemeContext = React.createContext<TThemeValue | undefined>(
  undefined
);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [dark, setDark] = React.useState(false);
  const themeValue: TThemeValue = {
    dark,
    setDark,
  };
  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
};
export default ThemeProvider;
