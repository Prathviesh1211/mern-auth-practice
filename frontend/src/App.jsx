import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 relative overflow-hidden">
      {/* <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
      {/* </div>/ */}
    </div>
  );
}

export default App;
