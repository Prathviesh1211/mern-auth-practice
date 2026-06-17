import React, { useState } from "react";
import { loginUser } from "../services/authServices";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(formData);

      console.log(data);

      navigate("/profile")
      toast.success("Login Successful");
    } catch (error) {
      console.log(error.response?.data?.message);
      toast.error(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
          <p className="mt-2 text-sm text-gray-400">Sign in to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={formData.email}
            name="email"
            onChange={handleChange}
            placeholder="email"
            className="input input-bordered w-full bg-white/5 border-white/10"
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="input input-bordered w-full bg-white/5 border-white/10"
          />

          <button
            type="submit"
            className="btn rounded-2xl text-xl btn-primary w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
