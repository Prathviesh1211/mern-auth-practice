import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Spinner from "./Spinner";
import { getCurrentUser } from "../services/authServices";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      setLoading(true);
      try {
        const user = await getCurrentUser();

        if (user) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return  children;
};

export default ProtectedRoute;
