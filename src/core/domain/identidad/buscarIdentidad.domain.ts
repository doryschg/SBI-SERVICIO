import { IdentidadI, IdentidadModel } from '../../models/identidad.models';
import IdentidadRepository from '../../repositories/identidad.repository';
import RecursoRepository from '../../repositories/recurso.repository';

const buscarIdentidad = (
  identidadRepository: IdentidadRepository, recursoRepository:RecursoRepository
) => async (cantMaxima:number): Promise<IdentidadI|null>  => {
  
    for (let index = 1; index <=cantMaxima; index++){
      const numeroGenerado:number= Math.round(Math.random() * (1000 - 1) + 1);
      const identidad = await identidadRepository.buscarIdentidad(numeroGenerado);
      if(identidad){
        if(identidad.url){
          identidad.url = await recursoRepository.obtenerRecurso(identidad.url!);
        }
        return identidad;
      }
    }
  return null;
};
export default buscarIdentidad;
