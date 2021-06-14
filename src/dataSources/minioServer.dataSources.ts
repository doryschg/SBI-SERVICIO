import MinioRepository from '../core/repositories/recurso.repository';
import Minio from 'minio';
import {Client} from 'minio';
class MinioServer implements MinioRepository {

  public async obtenerRecurso(url: string): Promise<string|null> {
    try {
      const minioClient =this.conexionServidor();
        const presignedUrl=await minioClient.presignedUrl('GET', '2021', url, 24*60*60);
        return presignedUrl;
    } catch (error) {
    console.log(error);
    }
    return null;
  }
  private conexionServidor() {
    return new Client({
      endPoint: '127.0.0.1',
      port: 9000,
      useSSL: false,
      accessKey: 'admin',
      secretKey: 'password'
  });
  }
}
export default MinioServer;
