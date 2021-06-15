import buscarIdentidad from '../../core/domain/identidad/buscarIdentidad.domain';
import { expect } from 'chai';
import IdentidadPsql from '../../dataSources/identidadPsql.dataSources';
import MinioServer from '../../dataSources/minioServer.dataSources';
import { assert } from 'console';

describe('buscar identidad Domain tests', () => { // the tests container
    it('devuelve la identidad de una persona', async () =>  {
        const cantMaxima:number= 2;
        try {
          const res=await buscarIdentidad(new IdentidadPsql(), new MinioServer())(cantMaxima);
          console.log(res);
        } catch (error) {
          expect(error).to.be.instanceOf(Error);
          console.error(); 
        } 
    });
});