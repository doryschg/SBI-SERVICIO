import { IdentidadI, IdentidadModel } from '../core/models/identidad.models';
import IdentidadRepository from '../core/repositories/identidad.repository';
class IdentidadPsql implements IdentidadRepository {

  public async buscarIdentidad(idNum: number): Promise<IdentidadI|null> {
    try {
      const identidad = await IdentidadModel.findByPk(idNum);
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
