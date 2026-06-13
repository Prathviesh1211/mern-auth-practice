import jwt from "jsonwebtoken"
import User from "../models/User.js";

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized Access - No Token",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    const user = await User.findById(
      decoded.userId
    ).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }

    req.user = user;

    next();

  } catch (error) {
    console.error("Error in authMiddleware : ",error);
    return res.status(401).json({
      message: "Invalid or Expired Token",
    });
  }
};

export default authMiddleware;