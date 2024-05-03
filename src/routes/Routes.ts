// src/routes/athlete.routes.ts
import { Router } from 'express';
import { addAthlete } from '../api/controller/AthleteController';




const router = Router();

router.post('/users', addAthlete);


export default router;
