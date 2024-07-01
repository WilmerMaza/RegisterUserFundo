import authRoutes from 'api/api.routes';
import { Router } from 'express';



const router = Router();

router.use('register', authRoutes);


export default router;