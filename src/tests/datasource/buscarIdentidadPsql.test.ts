import { expect } from 'chai';
import IdentidadPsql from '../../dataSources/identidadPsql.dataSources';

describe('buscar identidad DataSource tests', () => { // the tests container
    it('devuelve la identidad de una persona de la base', (done) => { 
        const identidad= new IdentidadPsql();
        const resultadoBusqueda= identidad.buscarIdentidad(512);
        resultadoBusqueda.then((ident) => {
        }).catch((e) => {
          console.log(e)
        }
        );
        done();
    });
});