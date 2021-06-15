import RepuestaIdentidad from '../../../dto/respuestaIdentidad';
import { IdentidadCreationAttributes } from '../../models/identidad.models';
import IdentidadRepository from '../../repositories/identidad.repository';

const crearIdentidad = (
  identidadRepository: IdentidadRepository
) => async (identidad:IdentidadCreationAttributes): Promise<RepuestaIdentidad|null>  => {
  try {
      const crearIdentidad = await identidadRepository.crearIdentidad(identidad);
      if(crearIdentidad){
            const respuestaIdentidad: RepuestaIdentidad ={
              identidad:crearIdentidad,
              fecha:new Date(),
              mensaje:'Creado correctamente'
            }
            return respuestaIdentidad;
          }
          return null;
      } catch (error) {
    console.log(error); 
    return null;
  }
};
export default crearIdentidad;
