import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import generateToken from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required!!!",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters",
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User exist!!!",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User Created Successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("Error in SIgnup Controller", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required!!!",
      });
    }

    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "Invalid Credentials",
      });
    }

    const isMatching = await bcrypt.compare(password, user.password);

    if (!isMatching) {
      return res.status(401).json({
        message: "Invalid Credentials",
      });
    }

    const token = generateToken(user._id);

    res.cookie("token",token,{
      httpOnly:true,
      secure:false,
      maxAge:7*24*60*60*1000
    })

    res.status(200).json({
      message: "Logged In Successfully",
      // user: {
      //   id: user._id,
      //   name: user.name,
      //   email: user.email,
      // },
    });
  } catch (error) {
    console.error("Error in Login Controller", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const logout = (req,res)=>{
  res.clearCookie("token")

    res.status(200).json({
        message:"Logged Out Successfully"
    });
}

export const getProfile=async(req,res)=>{
  res.status(200).json({
    user:req.user
  })
}