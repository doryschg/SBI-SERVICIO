import { IdentidadI, IdentidadModel } from "../models/identidad.models";

interface IdentidadRepository {
  buscarIdentidad(idNum: number): Promise<IdentidadI|null>;
  listarIdentidades(): Promise<IdentidadModel[]>;
}
export default IdentidadRepository;
