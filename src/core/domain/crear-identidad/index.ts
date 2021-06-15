import IdentidadPsql from '../../../dataSources/identidadPsql.dataSources';
import crearIdentidad from './crearIdentidad.domain';

    const identidadRepository = new IdentidadPsql();
    export default crearIdentidad(identidadRepository);




