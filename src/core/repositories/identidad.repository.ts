import { IdentidadAttributes, IdentidadCreationAttributes } from "../models/identidad.models";

interface IdentidadRepository {
  buscarIdentidad(idNum: number): Promise<IdentidadAttributes|null>;
  listarIdentidades(): Promise<IdentidadAttributes[]>;
  crearIdentidad(identidad:IdentidadCreationAttributes): Promise<IdentidadAttributes>;
}
export default IdentidadRepository;
