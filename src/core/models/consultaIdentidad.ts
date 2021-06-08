import { IdentidadModel } from "./identidad.models";

export default interface ConsultaIdentidad {
	identidad:IdentidadModel;
	cantIntentos?:number;
}

