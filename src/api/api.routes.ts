import { Router } from "express";
import { register } from "module";
//import { login, register } from "./Controllr/authController";

const authRoutes = Router();

authRoutes.post('/register', register);
//authRoutes.post('/login', login);

export default authRoutes;