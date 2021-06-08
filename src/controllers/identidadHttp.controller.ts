import buscarIdentidad from '../core/domain/identidad';
import { Response, Request } from 'express';

class IdentidadController{
  
async buscarIdentidad(request: Request, response: Response) {
  const {cantMaxima} = request.params;
  const identidad = await buscarIdentidad(cantMaxima);
      response.json({identidad, mensaje:'Resultado encontrado'})
};
}
export default new IdentidadController;