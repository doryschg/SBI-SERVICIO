import { Identidad, IdentidadAttributes, IdentidadCreationAttributes } from '../core/models/identidad/identidad.models';
import { IdentidadDto } from '../core/models/identidad/IdentidadDto';
import IdentidadRepository from '../core/repositories/identidad.repository';
import { PsqlRepository } from '../lib/PsqlRepository';
class IdentidadPsql extends PsqlRepository<Identidad>  implements IdentidadRepository {
  edit(item: IdentidadDto): Promise<IdentidadDto> {
    throw new Error('Method not implemented.');
  }
  delete(item: IdentidadDto): Promise<number> {
    throw new Error('Method not implemented.');
  }
  public async getAll(): Promise<Identidad[]> {
    const identidad = await Identidad.findAll();
    return identidad;
  }
  
  public async findById(id: number): Promise<Identidad|null> {
    const identidad = await Identidad.findByPk(id);
    return identidad;
  }

  public async add(identidad: IdentidadDto): Promise<Identidad> {
    const identidadAdd= await Identidad.create(identidad);
      return identidadAdd;
    
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


