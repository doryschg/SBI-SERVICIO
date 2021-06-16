import buscarIdentidad from '../core/domain/buscar-identidad';
import crearIdentidad from '../core/domain/crear-identidad';
import obtenerIdentidad from '../core/domain/obtener-identidad';
import listarIdentidad from '../core/domain/listar-identidad';
import { Response, Request } from 'express';
import { Identidad } from '../core/models/identidad/identidad.models';

class IdentidadController{
  
async buscarIdentidad(request: Request, response: Response) {
  const { query } = request;
  const cantMaxima: number = query.cantMaxima as any;

  const identidad = await buscarIdentidad(cantMaxima);
    if(identidad){
    response.json(identidad);
    }
    else{
    response.status(500).send('Ocurrio un error');
    }
  }

  async crearIdentidad(request: Request, response: Response) {
    const { body }=request;
    const identidad:Identidad=body;
    
    const identidadAdded = await crearIdentidad(identidad);
      if(identidadAdded){
      response.json(identidadAdded);
      }
      else{
      response.status(500).send('Ocurrio un error');
      }
    }
    async obtenerIdentidad(request: Request, response: Response) {
      const { id }=request.params;
      const idNum:number=id as unknown as number;
      
      const identidad = await obtenerIdentidad(idNum);
        if(identidad){
        response.json(identidad);
        }
        else{
        response.status(500).send('Ocurrio un error');
        }
      }

      async listarIdentidad(request: Request, response: Response) {
        
        const identidades = await listarIdentidad();
          if(identidades){
          response.json(identidades);
          }
          else{
          response.status(500).send('Ocurrio un error');
          }
        }
}
export default new IdentidadController;