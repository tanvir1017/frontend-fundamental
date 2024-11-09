import React from "react";
import "./App.css";
import { Menuitem, MenuList } from "./context/Menu";
import { ThemeContext, TThemeValue } from "./context/ThemeProvider";
import UseRefExample from "./pages/useRefExample";

function App() {
  const [hide, setHide] = React.useState<boolean>(false);
  const { dark, setDark } = React.useContext(ThemeContext) as TThemeValue;

  return (
    <div className={`${dark ? "bg-black " : "bg-white "} border p-10`}>
      <button
        onClick={() => setDark((prev) => !prev)}
        className="bg-purple-500 px-5 py-2 rounded-md"
      >
        {dark ? "light" : "dark"}
      </button>

      {!hide && <UseRefExample />}

      <MenuList>
        <Menuitem>hello</Menuitem>
        <Menuitem>hello</Menuitem>
        <Menuitem>hello</Menuitem>
      </MenuList>
    </div>
  );
}

export default App;
