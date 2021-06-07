import { IdentidadModel } from "../models/identidad.models";

interface IdentidadRepository {
  buscarIdentidad(idNum: number): Promise<IdentidadModel|null>;

}
export default IdentidadRepository;
