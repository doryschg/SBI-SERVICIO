import { expect } from 'chai';
import MinioServer from '../../dataSources/minioServer.dataSources';

describe('minio DataSource tests', () => { // the tests container
    it('checking default options', (ok) => {
        const minio= new MinioServer();
        const resultadoBusqueda= minio.obtenerRecurso('LP/LA_PAZ/video.mp4');
        resultadoBusqueda.then((url) => {
          console.log(url);
          ok();
        }).catch((e) => {
          console.log(e)
          ok();
        });
        
    });
});