import identidad from '.';
import { IdentidadModel } from '../../models/identidad.models';
import IdentidadRepository from '../../repositories/identidad.repository';

const buscarIdentidad = (
  identidadRepository: IdentidadRepository,
) => async (cantMaxima:number): Promise<IdentidadModel|null>  => {
  
    for (let index = 1; index <=cantMaxima; index++){
      const numeroGenerado:number= Math.round(Math.random() * (1000 - 1) + 1);
      console.log(numeroGenerado);
      const identidad:IdentidadModel|null= await identidadRepository.buscarIdentidad(numeroGenerado);
      if(identidad){
        return identidad;
      }
    }
  return null;
};

export default buscarIdentidad;
