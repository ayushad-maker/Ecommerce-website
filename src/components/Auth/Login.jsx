import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService.js";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {login}  = useAuth() 


  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
  const res = await loginUser(email, password);
  console.log("✅ Login response:", res);

  if (res.accessToken && res.user) {
    login(res.accessToken, res.user); // ⬅ Pass both to context
    toast.success("Login Successfully");
    navigate("/home");
  } else {
    throw new Error("Invalid response from server.");
  }
} catch (err) {
  console.error("❌ Login failed", err);
  setError(err.response?.data?.message || "Invalid credentials or server error.");
  toast.error("Invalid User!");
} finally {
  setLoading(false);
}

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400 px-6">
      <div className="relative p-3 rounded-2xl animate-glow-border">
      <div className="bg-white p-20 rounded-2xl shadow-lg max-w-xl w-full z-10">
        <h2 className="text-2xl italic font-bold text-center text-emerald-500 mb-6">
          Login to your Account
        </h2>

        {error && (
          <div className="bg-red-100 text-center text-red-600 rounded-xl mb-4 text-sm py-2 px-3">
            {error}
          </div>
        )}
   
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="email-form">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              autoComplete="on"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" validate-field  w-full border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 invli"
              placeholder="Your email here"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              
              value={password}
              minLength={6}
              onChange={(e) => setPassword(e.target.value)}
              className=" validate-field w-full border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              required
            />
            <p className="mt-2">password must of atleast 6 characters</p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition disabled:opacity-50 mt-6"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
          <p className="text-sm text-center font-semibold mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Login;
