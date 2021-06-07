import { IdentidadModel } from '../core/models/identidad.models';
import IdentidadRepository from '../core/repositories/identidad.repository';
class IdentidadPsql implements IdentidadRepository {

  public async buscarIdentidad(idNum: number): Promise<IdentidadModel|null> {
    return null;
      }
}
export default IdentidadPsql;
