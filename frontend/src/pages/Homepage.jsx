import { useNavigate } from "react-router-dom";
import { FiLock, FiShield, FiZap } from "react-icons/fi";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-64px)] bg-base-100">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="badge badge-primary badge-outline mb-4">
            MERN Authentication System
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-base-content">
            Secure Authentication
            <br />
            for Modern Applications
          </h1>

          <p className="text-lg text-base-content/70 max-w-3xl mx-auto mb-10">
            A complete authentication system built using React, Express, MongoDB
            and JWT Cookies. Fast, secure and production-ready.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              className="btn btn-primary"
              onClick={() => navigate("/signup")}
            >
              Get Started
            </button>

            <button
              className="btn btn-outline"
              onClick={() => navigate("/profile")}
            >
              View Profile
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card bg-base-200 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="card-body">
                
              <h3 className="card-title"> <FiLock size={24} />Secure Login</h3>

              <p className="text-base-content/70">
                JWT authentication with secure cookies and protected routes.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="card-body">
              <h3 className="card-title"><FiShield size={24} /> Protected Routes</h3>

              <p className="text-base-content/70">
                Route protection using middleware and authentication context.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="card-body">
              <h3 className="card-title"><FiZap size={24} /> Modern Stack</h3>

              <p className="text-base-content/70">
                Built using React, Express, MongoDB, Tailwind CSS and DaisyUI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
