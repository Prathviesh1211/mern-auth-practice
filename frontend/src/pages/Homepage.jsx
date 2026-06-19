import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
      <div className="max-w-4xl text-center">

        <span className="badge badge-outline mb-4">
          MERN Authentication System
        </span>

        <h1 className="text-5xl font-bold mb-6">
          Secure Authentication
          <br />
          for Modern Applications
        </h1>

        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
          A complete authentication system built with React, Express,
          MongoDB and JWT cookies. Secure, fast and modern.
        </p>

        <div className="flex justify-center gap-4 mb-16">
          <button className="btn btn-primary" onClick={()=>navigate("/signup")}>
            Get Started
          </button>

          <button className="btn btn-outline" onClick={()=>navigate("/profile")}>
            View Profile
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="rounded-2xl border border-white/10 bg-base-200 backdrop-blur-xl p-6">
            <h3 className="font-semibold mb-2">
              Secure Login
            </h3>

            <p className="text-sm text-gray-400">
              JWT based authentication with protected routes.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-base-200 backdrop-blur-xl p-6">
            <h3 className="font-semibold mb-2">
              Protected Routes
            </h3>

            <p className="text-sm text-gray-400">
              Access control using middleware and token validation.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-base-200 backdrop-blur-xl p-6">
            <h3 className="font-semibold mb-2">
              Modern UI
            </h3>

            <p className="text-sm text-gray-400">
              Built using React, Tailwind CSS and DaisyUI.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;