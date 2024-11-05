import React from "react";
import ReactDOM from "react-dom/client";
//import { Bundler } from "./app";

const HelloWorld = () => {
  return (
    <div>
      <h1>This is also hello world</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HelloWorld />);
