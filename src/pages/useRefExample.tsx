import React from "react";
import Input from "../components/input";

const UseRefExample = () => {
  const myRef = React.useRef<HTMLInputElement | null>(null);

  const handleKeyPress = () => {
    myRef.current?.focus();
  };
  React.useEffect(() => {
    console.log("component mounted just");

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div>
      <Input className="border border-sky-400" ref={myRef} />
    </div>
  );
};

export default UseRefExample;
