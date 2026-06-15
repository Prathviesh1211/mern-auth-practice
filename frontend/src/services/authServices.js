/* eslint-disable no-useless-catch */
import axios from "axios";
import { toast } from "sonner";
const API_URL = "http://localhost:3000/api/auth";

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

export { loginUser };
