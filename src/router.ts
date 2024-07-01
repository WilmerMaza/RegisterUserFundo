import { Router } from 'express';
import authRoutes from './api/api.routes';



const router = Router();

router.use('register', authRoutes);


export default router;