import { Router } from 'express';
import { addAthlete, getAllAthletesController, updateAthlete } from '../api/controller/AthleteController';

const router = Router();

router.post('/AthletesRegister', addAthlete);
router.put('/AthleteUpdate/:ID', updateAthlete);
router.get('/AthletesAll', getAllAthletesController);

export default router;
