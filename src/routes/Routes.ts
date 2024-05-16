import { Router } from 'express';
import { addAthlete, getAllAthletesController, updateAthlete } from '../api/controller/AthleteController';

const router = Router();

router.post('/Users', addAthlete);
router.put('/users/:ID', updateAthlete);
router.get('/athletes', getAllAthletesController);

export default router;
