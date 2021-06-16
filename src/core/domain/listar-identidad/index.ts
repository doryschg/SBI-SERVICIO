import IdentidadPsql from '../../../dataSources/identidadPsql.dataSources';
import listarIdentidad from './listarIdentidad.domain';

    const identidadRepository = new IdentidadPsql();
    export default listarIdentidad(identidadRepository);




