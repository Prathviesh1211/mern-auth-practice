import { Link } from "react-router-dom";
import { toast } from "sonner";
import { logoutUser } from "../services/authServices";
import { useNavigate, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useTheme from "../hooks/useTheme";

const Navbar = () => {
  const navigate = useNavigate();
  const { setUser, setIsAuthenticated, isAuthenticated } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const handleLogout = async () => {
    try {
      const res = await logoutUser();
      setUser(null);
      setIsAuthenticated(false);

      toast.success(res.message || "Logged out successfully");

      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to log out");
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-base-200 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-wide">
          AUTH
        </Link>

        <div className="flex items-center gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "btn btn-primary btn-sm pointer-events-none"
                : "btn btn-ghost btn-sm"
            }
          >
            Home
          </NavLink>

          <button className="btn btn-ghost btn-sm" onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          {isAuthenticated ? (
            <>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive
                    ? "btn btn-primary btn-sm pointer-events-none"
                    : "btn btn-ghost btn-sm"
                }
              >
                Profile
              </NavLink>

              <button className="btn btn-primary btn-sm" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-primary btn-sm">
                Login
              </Link>

              <Link to="/signup" className="btn btn-outline btn-sm">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
