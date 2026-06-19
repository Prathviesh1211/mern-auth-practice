import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const BASE_URL = "http://localhost:3000/api/auth";

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCurrentUser = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/profile`, {
        withCredentials: true,
      });
     setUser(res.data.user);
    setIsAuthenticated(true);

  } catch (error) {
    setUser(null);
    setIsAuthenticated(false);
  } finally {
    setLoading(false);
  }
  };

  useEffect(() => {
    getCurrentUser();
  },[]);

  return <AuthContext.Provider value={{ isAuthenticated, user, getCurrentUser,loading,setUser, setIsAuthenticated }}>{children}</AuthContext.Provider>;
};
