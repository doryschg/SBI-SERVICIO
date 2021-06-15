import { IdentidadAttributes } from "../../models/identidad/identidad.models";
import MensajesApp from "./mensajeApp";

interface RepuestaIdentidad extends MensajesApp {
	identidad?:IdentidadAttributes|null;
	cantidadIntentos?:number;
	fecha:Date;
}
export default RepuestaIdentidad;
