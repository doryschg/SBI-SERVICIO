import RespuestaIdentidad from "../domain/identidad/RespuestaIdentidad";
import Identidad from "../models/Identidad";

interface IdentidadRepository {
  getIdentidad(idNum: number): Promise<RespuestaIdentidad|null>;

  findById(idNum: number): Promise<Identidad|null>;

}
export default IdentidadRepository;
