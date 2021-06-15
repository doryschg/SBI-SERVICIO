import { Identidad, IdentidadAttributes, IdentidadCreationAttributes } from '../core/models/identidad/identidad.models';
import IdentidadRepository from '../core/repositories/identidad.repository';
import { PsqlRepository } from '../lib/PsqlRepository';
class IdentidadPsql extends PsqlRepository<Identidad>  implements IdentidadRepository {
  
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
