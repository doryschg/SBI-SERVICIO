import { Identidad, IdentidadAttributes, IdentidadCreationAttributes } from '../core/models/identidad.models';
import IdentidadRepository from '../core/repositories/identidad.repository';
class IdentidadPsql implements IdentidadRepository {
  crearIdentidad(identidad:IdentidadCreationAttributes): Promise<IdentidadAttributes> {
    throw new Error('Method not implemented.');
  }

   public async listarIdentidades(): Promise<IdentidadAttributes[]> {
    const identidades=await Identidad.findAll({
      attributes:['idNum','nombres']
    });
    return identidades;
  }
  
  public async buscarIdentidad(idNum: number): Promise<IdentidadAttributes|null> {
    try {
      const identidad = await Identidad.findByPk(idNum);
      if(identidad){
        return identidad.get();
      }
    } catch (error) {
      console.log(error);
      return null;
    }
    return null;
  }
}
export default IdentidadPsql;
