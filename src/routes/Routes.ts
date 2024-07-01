import { Router } from 'express';
import { addAthlete, getAthletesByIdPartidaController, updateAthlete } from '../api/controller/AthleteController';

const router = Router();

router.post('/AthletesRegister', addAthlete);
router.put('/AthleteUpdate/:ID', updateAthlete);
router.get('/athletes/:idPartida', getAthletesByIdPartidaController);

export default router;
