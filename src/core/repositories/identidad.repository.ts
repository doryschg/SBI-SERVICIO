import { IdentidadModel } from "../models/identidad.models";

interface IdentidadRepository {
  getIdentidad(idNum: number): Promise<IdentidadModel|null>;


}
export default IdentidadRepository;
