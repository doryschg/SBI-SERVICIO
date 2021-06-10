import { IdentidadModel } from '../core/models/identidad.models';
import IdentidadRepository from '../core/repositories/identidad.repository';
class IdentidadPsql implements IdentidadRepository {

  public async buscarIdentidad(idNum: number): Promise<IdentidadModel|null> {
    try {
      const identidad:IdentidadModel|null = await IdentidadModel.findByPk(idNum);
      if(identidad){
        return identidad;
      }
      else{
        return new IdentidadModel();
      }
    } catch (error) {
      return null;
    }
  }
}
export default IdentidadPsql;
