import { IdentidadModel } from '../../models/identidad.models';
import IdentidadRepository from '../../repositories/identidad.repository';

const buscarIdentidad = (
  identidadRepository: IdentidadRepository,
) => async (cantMaxima:number): Promise<IdentidadModel|null>  => {

  return null;
};

export default buscarIdentidad;
