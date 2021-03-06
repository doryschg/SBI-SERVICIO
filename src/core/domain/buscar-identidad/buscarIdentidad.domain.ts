import IdentidadRepository from '../../repositories/identidad.repository';
import RecursoRepository from '../../repositories/recurso.repository';
import RepuestaIdentidad from '../respuestaIdentidad';

const buscarIdentidad = (
  identidadRepository: IdentidadRepository, recursoRepository:RecursoRepository
) => async (cantMaxima:number): Promise<RepuestaIdentidad|null>  => {
  try {
    for (let index = 1; index <=cantMaxima; index++){
      const numeroGenerado:number= Math.round(Math.random() * (1000 - 1) + 1);
      const consultaIdentidad = await identidadRepository.buscarIdentidad(numeroGenerado);
      if(consultaIdentidad){
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        { const url = await recursoRepository.obtenerRecurso(consultaIdentidad.url!);
          // TODO implementar logger para log
          if(url){
            consultaIdentidad.url=url;
            const respuestaIdentidad: RepuestaIdentidad ={
              identidad:consultaIdentidad,
              cantidadIntentos:index,
              fecha: new Date(),
              mensaje:'Resultado encontrado'
            }
            return respuestaIdentidad;
          }
        }
        const respuestaIdentidad: RepuestaIdentidad ={
          identidad:null,
          cantidadIntentos:index,
          fecha: new Date(),
          mensaje:'No se ha podido conectar con el servidor de archivos'
        };
        return respuestaIdentidad
      }
    }
    const respuestaIdentidad: RepuestaIdentidad ={
      fecha: new Date(),
      mensaje:'No se ha encontrado ningun registro en el rango especificado',
    };
    return respuestaIdentidad;
  } catch (error) {
    console.log(error); 
    return null;
  }
};
export default buscarIdentidad;
