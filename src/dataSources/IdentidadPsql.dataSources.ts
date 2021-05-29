import Identidad from '../core/models/Identidad';
import IdentidadRepository from '../core/repositories/identidad.repository';
import { pool } from '../database/database';
class IdentidadPsql implements IdentidadRepository {

  public async getIdentidad(idNum: number): Promise<Identidad> {
    // TODO: conectar a la base de datos
    const query= await pool.query(`SELECT public.consultar_identidad(${idNum});`);
    console.log(`resultado procedimiento:${query.fields}`);
    return {
      idNum: 12,
      name: "José",
    };
  } 

}
export default IdentidadPsql;
