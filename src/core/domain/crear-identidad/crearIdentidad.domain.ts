import { Identidad, IdentidadCreationAttributes } from '../../models/identidad/identidad.models';
import { IdentidadFactory } from '../../models/identidad/IdentidadFactory';
import IdentidadRepository from '../../repositories/identidad.repository';
import RepuestaIdentidad from '../respuestaIdentidad';

const crearIdentidad = (
  identidadRepository: IdentidadRepository
) => async (identidad:Identidad): Promise<RepuestaIdentidad|null>  => {
  try {
      const identidadToAdd = IdentidadFactory.create(identidad);
      console.log(identidad);
      const crearIdentidad = await identidadRepository.add(identidadToAdd);
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
