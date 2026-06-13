import express from 'express'
import { getProfile, login, logout, signup } from '../controllers/auth.Controller.js';
import authMiddleware from "../middleware/auth.middleware.js"

const router=express.Router();

router.post('/signup',signup);
router.post('/login',login);
router.get('/profile',authMiddleware,getProfile);
router.post('/logout',logout);

export default router;