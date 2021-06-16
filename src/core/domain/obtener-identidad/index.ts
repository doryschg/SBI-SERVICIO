import IdentidadPsql from '../../../dataSources/identidadPsql.dataSources';
import obtenerIdentidad from './obtenerIdentidad.domain';

    const identidadRepository = new IdentidadPsql();
    export default obtenerIdentidad(identidadRepository);




