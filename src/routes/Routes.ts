// src/routes/athlete.routes.ts
import { Router } from 'express';
import { addAthlete, updateAthleteController } from '../api/controller/AthleteController';




const router = Router();

router.post('/users', addAthlete);
router.put('/users/:ID', updateAthleteController);


export default router;
