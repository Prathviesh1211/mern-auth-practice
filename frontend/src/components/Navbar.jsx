import { Link } from "react-router-dom";
import { toast } from "sonner";
import { logoutUser } from "../services/authServices";
import {useNavigate} from "react-router-dom"

const Navbar = () => {
  const navigate=useNavigate();

  const handleLogout=async()=>{
    try{
      const res=await logoutUser();
      toast.success(res.message || "Logged out successfully");
      navigate("/login");
    }catch(error){
      toast.error(error.response?.data?.message || "Failed to log out");
    }
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-base-100/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link
          to="/"
          className="text-xl font-bold tracking-wide"
        >
          AUTH
        </Link>

        <div className="flex items-center gap-4">

          <Link
            to="/"
            className="btn btn-ghost btn-sm"
          >
            Home
          </Link>

          <Link
            to="/profile"
            className="btn btn-ghost btn-sm"
          >
            Profile
          </Link>

          <button
            className="btn btn-ghost btn-sm"
          >
            🌙
          </button>

          <button
            className="btn btn-primary btn-sm"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;