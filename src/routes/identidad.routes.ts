import { Router } from 'express';
const router = Router();

import identidadController from '../controllers/identidadHttp.controller';

router.get('/criteria', identidadController.buscarIdentidad);
router.post('/', identidadController.crearIdentidad);
router.get('/:id', identidadController.obtenerIdentidad);
router.get('/', identidadController.listarIdentidad);

export default router;