import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { loginUser } from "../services/authServices";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { setUser, setIsAuthenticated } = useAuth();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(formData);

      setIsAuthenticated(true);
      setUser(data.user);

      toast.success("Login Successful");

      navigate("/profile");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
      <div className="card w-full max-w-md bg-white/5 shadow-xl">
        <div className="card-body">

          <div className="text-center mb-4">
            <h1 className="text-3xl font-bold">
              Welcome Back
            </h1>

            <p className="mt-2 text-sm text-base-content/70">
              Sign in to access your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="label">
                <span className="label-text">
                  Email
                </span>
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">
                  Password
                </span>
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full"
            >
              Login
            </button>

          </form>

          <p className="text-sm text-center text-base-content/70 mt-4">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="link link-primary font-medium"
            >
              Sign up here
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;