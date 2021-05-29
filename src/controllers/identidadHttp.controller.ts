import buscarIdentidad from '../core/domain';
import { Response, Request } from 'express';

const IdentidadController = async (request: Request, response: Response) => {
  const { body } = request;
  const { cantMaxima } = body;

  const identidad = await buscarIdentidad(cantMaxima);

  if(identidad){
    response.json(identidad);
  }
  
};
export default IdentidadController;