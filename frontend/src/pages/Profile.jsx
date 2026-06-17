import React, { useEffect, useState } from "react";
import { getCurrentUser } from "../services/authServices";
import { toast } from "sonner";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const fetchUser = async () => {
        const res = await getCurrentUser();
        setUser(res.user);
        console.log(res.user);
      };

      fetchUser();
      toast.success("User data fetched successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch user data");
    }
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <h3 className="text-sm uppercase tracking-widest text-gray-400">
            Profile
          </h3>

          <div className="mt-4">
            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-2xl font-bold mx-auto">
              {user.name.charAt(0).toUpperCase()}
            </div>
          </div>

          <h1 className="text-2xl font-bold mt-4">{user.name}</h1>

          <p className="text-gray-400 mt-1">{user.email}</p>
        </div>

        <div className="mt-8 rounded-2xl border mb-4 border-white/10 bg-white/5 p-4">
          <h2 className="font-semibold mb-2 text-center">Welcome Back 👋</h2>

          <p className="text-sm  text-gray-400 text-center">
            Your account is authenticated and active.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center rounded-xl bg-white/5 p-4 border border-white/5">
            <span className="text-gray-400">Status</span>
            <span className="badge badge-success">Active</span>
          </div>

          <div className="flex justify-between items-center rounded-xl bg-white/5 p-4 border border-white/5">
            <span className="text-gray-400">Account Type</span>
            <span>User</span>
          </div>

          <div className="flex justify-between items-center rounded-xl bg-white/5 p-4 border border-white/5">
            <span className="text-gray-400">User ID</span>
            <span>{user._id.slice(0, 8)}...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
