import { expect } from 'chai';
import IdentidadPsql from '../../dataSources/identidadPsql.dataSources';

describe('listar identidades DataSource tests', () => { // the tests container
    it('devuelve la lista de identidades de la bd', (done) => { 
        const identidad= new IdentidadPsql();
        const res= identidad.listarIdentidades();
        res.then((ident) => {
          //console.log(ident);
        }).catch((e) => {
          console.log(e)
        }
        );
        done();
    });
});