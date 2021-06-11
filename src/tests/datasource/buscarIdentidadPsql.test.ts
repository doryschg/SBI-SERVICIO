import { expect } from 'chai';
import IdentidadPsql from '../../dataSources/identidadPsql.dataSources';

describe('buscar identidad DataSource tests', () => { // the tests container
    it('checking default options', () => { 
        const numeroGenerado:number= Math.round(Math.random() * (1000 - 1) + 1);
        const identidad= new IdentidadPsql();
        const resultadoBusqueda= identidad.buscarIdentidad(4);
        //expect(resultadoBusqueda?.).to.false;
       // expect(resultadoBusqueda).to.be.true;
       /* expect(resultadoBusqueda.detectRetina).to.be.false; // Do I need to explain anything? It's like writing in English!
        expect(resultadoBusqueda.fpsLimit).to.equal(30); // As I said 3 lines above
        expect(resultadoBusqueda.interactivity.modes.emitters).to.be.empty; // emitters property is an array and for this test must be empty, this syntax works with strings too
        expect(resultadoBusqueda.particles.color).to.be.an("object").to.have.property("value").to.equal("#fff"); // this is a little more complex, but still really clear
      */
    });
});