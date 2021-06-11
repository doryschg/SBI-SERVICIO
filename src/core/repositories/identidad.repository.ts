import { IdentidadI } from "../models/identidad.models";

interface IdentidadRepository {
  buscarIdentidad(idNum: number): Promise<IdentidadI|null>;

}
export default IdentidadRepository;
