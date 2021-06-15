import CommonRepository from "../../lib/CommonRepository";
import { Identidad, IdentidadAttributes, IdentidadCreationAttributes } from "../models/identidad/identidad.models";

interface IdentidadRepository extends CommonRepository<number, Identidad> {
  buscarIdentidad(idNum: number): Promise<IdentidadAttributes|null>;
}
export default IdentidadRepository;
