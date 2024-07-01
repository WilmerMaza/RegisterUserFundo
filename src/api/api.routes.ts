import { Router } from "express";
import  {addAthlete } from "../api/controller/AthleteController";


const authRoutes = Router();

authRoutes.post('/', addAthlete);


export default authRoutes;