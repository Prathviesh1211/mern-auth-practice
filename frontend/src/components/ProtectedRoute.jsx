import {  Navigate } from "react-router-dom";
import Spinner from "./Spinner";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const {isAuthenticated, loading} = useAuth();

  if (loading) {
    return <Spinner />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return  children;
};

export default ProtectedRoute;
