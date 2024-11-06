import React, { useState } from "react";

const UseStateExample = () => {
  const [user, setUser] = useState({ name: "", email: "" });

  const onsubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(user);
    const field = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [field]: value });
  };

  return (
    <div>
      <form onSubmit={onsubmit}>
        <input onChange={handleChange} type="text" name="name" id="" />
        <input onChange={handleChange} type="text" name="email" id="" />
        <button type="submit">Anmeldung</button>
      </form>
    </div>
  );
};

export default UseStateExample;
