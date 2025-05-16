import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    try {
      const res = await axios.post("http://localhost:8080/login", {
        email,
        password,
      });

      setMessage({ type: "success", text: "Login successful!" });
      setTimeout(() => {
        navigate("/home");
      }, 1500);
    } catch (err) {
      const errorMsg =
        err.response?.data?.message || "Login failed. Please try again.";
      setMessage({ type: "error", text: errorMsg });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4 py-8">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-green-700 mb-4 text-center">
          🌿 माऊली सब्जी भंडार 🌿
        </h1>
        <h2 className="text-xl font-semibold text-center mb-4">Login</h2>

        {message.text && (
          <div
            className={`text-sm px-4 py-2 rounded mb-4 text-center font-medium ${
              message.type === "error"
                ? "bg-red-100 text-red-700 border border-red-300"
                : "bg-green-100 text-green-700 border border-green-300"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          You Dont Remember Password?{" "}
          <span
            onClick={() => navigate("/forgotpassword")}
            className="text-green-600 cursor-pointer hover:underline"
          >
            Forgot password
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
