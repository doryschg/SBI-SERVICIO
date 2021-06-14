import IdentidadPsql from "../../dataSources/identidadPsql.dataSources";
import { IdentidadI } from "./identidad.models";
import MensajesApp from "./mensajeApp";

interface RepuestaIdentidad extends MensajesApp {
	identidad?:IdentidadI|null;
	cantidadIntentos?:number;
	fecha:Date;
}
export default RepuestaIdentidad;
