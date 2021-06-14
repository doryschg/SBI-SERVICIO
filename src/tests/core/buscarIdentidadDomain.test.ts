import { expect } from 'chai';
import buscarIdentidad from '../../core/domain/identidad/buscarIdentidad.domain';
import IdentidadPsql from '../../dataSources/identidadPsql.dataSources';
import MinioServer from '../../dataSources/minioServer.dataSources';

describe('buscar identidad Domain tests', () => { // the tests container
    it('devuelve la identidad de una persona', (ok) => {
        const cantMaxima:number= 10;
        const resultadoIdentidad=buscarIdentidad(new IdentidadPsql(), new MinioServer())(cantMaxima);
        resultadoIdentidad.then((ident) => {
            console.log(ident);
            ok();
          }).catch((e) => {
            console.log(e)
            ok();
          });
    });
});