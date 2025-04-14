import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // assuming you're using AuthContext

const Login = () => {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (number.toString() === "7620574692" && password === "admin") {
      login();
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full border border-green-300">
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://img.icons8.com/emoji/96/seedling.png"
            alt="agriculture"
            className="w-16 h-16"
          />
          <h2 className="text-2xl font-bold text-green-700 mt-2">
            माऊली भाजी भांडार
          </h2>
          <p className="text-sm text-green-600">कृपया लॉगिन करा</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-green-700 font-medium"
            >
              फोन नंबर / वापरकर्तानाव
            </label>
            <input
              type="number"
              id="username"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="आपला नंबर लिहा"
              className="mt-1 w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-green-700 font-medium"
            >
              पासवर्ड
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="आपला पासवर्ड"
              className="mt-1 w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-all"
          >
            लॉगिन करा
          </button>

          <div className="text-sm text-center text-green-700 mt-4">
            नवीन वापरकर्ता?{" "}
            <a href="#" className="underline font-medium">
              नोंदणी करा
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
