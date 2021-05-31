import buscarIdentidad from './buscarIdentidad.domain';
import IdentidadPsql from '../../../dataSources/IdentidadPsql.dataSources';

const identidadRepository = new IdentidadPsql();
export default buscarIdentidad(identidadRepository);



