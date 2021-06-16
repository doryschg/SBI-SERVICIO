import CommonRepository from "../../lib/CommonRepository";
import { Identidad, IdentidadAttributes, IdentidadCreationAttributes } from "../models/identidad/identidad.models";
import { IdentidadDto } from "../models/identidad/IdentidadDto";

interface IdentidadRepository extends CommonRepository<number, IdentidadDto> {
  buscarIdentidad(idNum: number): Promise<IdentidadAttributes|null>;
}
export default IdentidadRepository;
