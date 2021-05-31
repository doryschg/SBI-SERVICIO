import RespuestaIdentidad from '../core/domain/identidad/RespuestaIdentidad';
import Identidad from '../core/models/Identidad';
import IdentidadRepository from '../core/repositories/identidad.repository';
import { pool } from '../database/database';
class IdentidadPsql implements IdentidadRepository {
  findById(idNum: number): Promise<Identidad | null> {
    throw new Error('Method not implemented.');
  }

  public async getIdentidad(idNum: number): Promise<RespuestaIdentidad|null> {
const query=`SELECT public.consultar_identidad(${idNum});`;
    try {
      let asd = await pool.query<RespuestaIdentidad>(query);
      for (let row of asd.rows) {
        return row;
      }
    } catch (error) {
      console.log(error)
    }
    return null;
      }
}
export default IdentidadPsql;
