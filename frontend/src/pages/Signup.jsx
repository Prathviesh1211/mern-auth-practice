import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { registerUser } from "../services/authServices";
import useAuth from "../hooks/useAuth";

const Signup = () => {
  const navigate = useNavigate();
  const { getCurrentUser } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await registerUser(formData);
      

      toast.success(
        res.message || "Account created successfully"
      );

      await getCurrentUser();

      navigate("/login");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to create account"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">

      <div className="card w-full max-w-md bg-white/5 shadow-xl">

        <div className="card-body">

          <h1 className="text-3xl font-bold text-center">
            Create Account
          </h1>

          <p className="text-center text-base-content/70">
            Join and start managing your account.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 mt-4"
          >

            <div>
              <label className="label">
                <span className="label-text">
                  Name
                </span>
              </label>

              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="input input-bordered w-full"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">
                  Email
                </span>
              </label>

              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                className="input input-bordered w-full"
                value={formData.email}
                onChange={handleChange}
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
                placeholder="••••••••"
                className="input input-bordered w-full"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={loading}
            >
              {loading
                ? "Creating Account..."
                : "Create Account"}
            </button>
          </form>

          <p className="text-sm text-center text-base-content/70 mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary hover:underline font-medium"
            >
              Login
            </Link>
          </p>

        </div>
      </div>

    </div>
  );
};

export default Signup;