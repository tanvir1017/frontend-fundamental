import React from "react";
import "./App.css";
import { ThemeContext, TThemeValue } from "./context/ThemeProvider";
import UserDataFetch from "./pages/userDataFetch";

function App() {
  const [hide, setHide] = React.useState<boolean>(false);
  const { dark, setDark } = React.useContext(ThemeContext) as TThemeValue;

  return (
    <div className={`${dark ? "bg-black " : "bg-white "} border p-10`}>
      <UserDataFetch />
    </div>
  );
}

export default App;
