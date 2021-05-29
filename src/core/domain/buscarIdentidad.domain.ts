
import IdentidadPsql from '../../dataSources/IdentidadPsql.dataSources';
import Identidad from '../models/Identidad';
import IdentidadRepository from '../repositories/identidad.repository';

const buscarIdentidad = (
  identidadRepository: IdentidadRepository,
) => async (cantMaxima:number): Promise<Identidad>  => {

  for (let index = 0; index <=cantMaxima; index++) {
    let numeroGenerado:number= Math.round(Math.random() * (1000 - 1) + 1);
    console.log(numeroGenerado);
    const identidad:Identidad=await identidadRepository.getIdentidad(numeroGenerado);
    if(identidad){ // si encuentra respuesta en bd
      return identidad;
    }

  }
  const identidadNoencontrada:Identidad={idNum:0,name:''};
  return identidadNoencontrada;
};

export default buscarIdentidad;
