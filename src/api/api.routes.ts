import { Router } from "express";
import  {addAthlete } from "api/controller/AthleteController";
//import { login, register } from "./Controllr/authController";

const authRoutes = Router();

authRoutes.post('/', addAthlete);

//authRoutes.post('/login', login);

export default authRoutes;