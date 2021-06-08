import { copyFileSync } from 'fs';
import { IdentidadModel } from '../core/models/identidad.models';
import IdentidadRepository from '../core/repositories/identidad.repository';
class IdentidadPsql implements IdentidadRepository {

  public async buscarIdentidad(idNum: number): Promise<IdentidadModel|null> {

      const identidad:IdentidadModel|null = await IdentidadModel.findByPk(idNum);
      return identidad;
    
      }
}
export default IdentidadPsql;
