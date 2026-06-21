import axios from "axios";
const API_URL =
  "https://mern-auth-practice-nl3l.onrender.com/api/auth"

const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

const logoutUser = async () => {
  try {
    const response = await axios.post(`${API_URL}/logout`, null, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getCurrentUser = async () => {
  try {
    const response = await axios.get(`${API_URL}/profile`, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export { loginUser, registerUser, getCurrentUser, logoutUser };

