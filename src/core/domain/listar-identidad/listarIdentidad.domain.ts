import { IdentidadAttributes } from '../../models/identidad/identidad.models';
import IdentidadRepository from '../../repositories/identidad.repository';

const listarIdentidad = (
  identidadRepository: IdentidadRepository
) => async (): Promise<IdentidadAttributes[]|null>  => {
  try {
      const identidades = await identidadRepository.getAll();
          return identidades;
      } catch (error) {
    console.log(error); 
    return null;
  }
};
export default listarIdentidad;
