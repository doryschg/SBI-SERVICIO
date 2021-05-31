import buscarIdentidad from '../core/domain/identidad';
import findByIdIdentidad from '../core/domain/identidad';
import { Response, Request } from 'express';

class IdentidadController{

async buscarIdentidad(request: Request, response: Response) {
  const { body } = request;
  const { cantMaxima } = body;

  const identidad = await buscarIdentidad(cantMaxima);

  if(identidad){
    if(identidad.idNum){
      response.json({identidad,mensaje:'Resultado encontrado'})
    }
    else{
      response.json({identidad,status:204, mensaje:'No se ha encontrado ningun registro en el rango especificado'});
    }
  }
  else{
    response.json({ mensaje: 'Mensaje – Problema de conexión. Vuelva a intentarlo más tarde.',
     status: 500 });
  }

};

async findById(request: Request, response: Response) {
  const { body } = request;
  const { cantMaxima } = body;

  const identidad = await findByIdIdentidad(cantMaxima);

  if(identidad){
    if(identidad.idNum){
      response.json({identidad,mensaje:'Resultado encontrado'})
    }
    else{
      response.json({identidad,status:204, mensaje:'No se ha encontrado ningun registro en el rango especificado'});
    }
  }
  else{
    response.json({ mensaje: 'Mensaje – Problema de conexión. Vuelva a intentarlo más tarde.',
     status: 500 });
  }

};

}
export default new IdentidadController;