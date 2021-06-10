import { expect } from 'chai';
import buscarIdentidad from '../../core/domain/identidad/buscarIdentidad.domain';
import IdentidadPsql from '../../dataSources/IdentidadPsql.dataSources';

describe('buscar identidad Domain tests', () => { // the tests container
    it('checking default options', () => {
        const cantMaxima:number= 3;
        const identidad=buscarIdentidad(new IdentidadPsql())(cantMaxima);
    });
});