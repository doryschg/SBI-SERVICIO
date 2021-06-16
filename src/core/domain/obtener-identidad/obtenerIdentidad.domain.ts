import IdentidadRepository from '../../repositories/identidad.repository';
import RepuestaIdentidad from '../respuestaIdentidad';

const obtenerIdentidad = (
  identidadRepository: IdentidadRepository
) => async (id:number): Promise<RepuestaIdentidad|null>  => {
  try {
      
      const obtIdentidad = await identidadRepository.findById(id);
      if(obtIdentidad){
            const respuestaIdentidad: RepuestaIdentidad ={
              identidad:obtIdentidad,
              fecha:new Date(),
              mensaje:'obtenido correctamente'
            }
            return respuestaIdentidad;
          }
          return null;
      } catch (error) {
    console.log(error); 
    return null;
  }
};
export default obtenerIdentidad;
