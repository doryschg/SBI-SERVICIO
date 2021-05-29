import Identidad from "../models/Identidad";

interface IdentidadRepository {
  getIdentidad(idNum: number): Promise<Identidad>;
}
export default IdentidadRepository;
