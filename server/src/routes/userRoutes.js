import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";

const router = express.Router();

router.route('/login').post(loginUser);
router.route('/signup').post(registerUser);

export default router;