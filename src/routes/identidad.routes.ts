import { Router } from 'express';
const router = Router();

import identidadController from '../controllers/identidadHttp.controller';

router.get('/', identidadController.buscarIdentidad);

export default router;