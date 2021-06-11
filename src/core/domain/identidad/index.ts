import buscarIdentidad from './buscarIdentidad.domain';
import IdentidadPsql from '../../../dataSources/identidadPsql.dataSources';
import MinioServer from '../../../dataSources/minio.dataSources';

const identidadRepository = new IdentidadPsql();
const recursoRepository= new MinioServer();
export default buscarIdentidad(identidadRepository, recursoRepository);



