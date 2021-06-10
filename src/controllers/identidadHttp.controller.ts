import buscarIdentidad from '../core/domain/identidad';
import { Response, Request } from 'express';

class IdentidadController{
  
async buscarIdentidad(request: Request, response: Response) {
  const { query } = request;
  const cantMaxima: number = query.cantMaxima as any;

  const identidad = await buscarIdentidad(cantMaxima);
    if(identidad){
    response.json({identidad, mensaje:'Resultado encontrado'})
    }
    else{
    response.json({identidad, mensaje:'Resultado no encontrado'})
    }
  };
}
export default new IdentidadController;