import React from "react";

type TMenuContext = {
  theme: string[];
};

type TMenuListProps = {
  children: React.ReactNode;
};

const MenuContext = React.createContext<TMenuContext | null>(null);

export const MenuList = ({ children }: TMenuListProps) => {
  const value = {
    theme: ["dark", "light"],
  };

  return (
    <MenuContext.Provider value={value}>
      <ul>{children}</ul>
    </MenuContext.Provider>
  );
};

export const Menuitem = ({ children }: { children: React.ReactNode }) => {
  const { theme } = React.useContext(MenuContext) as TMenuContext;
  console.log(theme);
  return <div>{children}</div>;
};
