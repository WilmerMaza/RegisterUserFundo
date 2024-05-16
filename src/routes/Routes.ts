import { Router } from 'express';
import { addAthlete, updateAthlete } from '../api/controller/AthleteController';

const router = Router();

router.post('/users', addAthlete);
router.put('/users/:ID', updateAthlete);

export default router;
