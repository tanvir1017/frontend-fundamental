import axios from "axios";
import { FormEvent, useState } from "react";

interface LoginProps {}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const payload = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/signin",
        payload,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true, // Important: This allows cookies to be sent
        }
      );
      console.log("Signin successful:", response.data);
    } catch (error) {
      console.error("Signin failed:", error.response?.data || error.message);
    }
  };
  return (
    <div className="border py-20">
      <form onSubmit={handleOnSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-red-200 w-full"
          id="email"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-red-200 w-full"
          id="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
