import identidad from '.';
import { IdentidadModel } from '../../models/identidad.models';
import IdentidadRepository from '../../repositories/identidad.repository';

const buscarIdentidad = (
  identidadRepository: IdentidadRepository,
) => async (cantMaxima:any): Promise<IdentidadModel|null>  => {
  const identidad:IdentidadModel|null= await identidadRepository.buscarIdentidad(cantMaxima);

  return identidad;
};

export default buscarIdentidad;
