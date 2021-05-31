
import { response } from 'express';
import { TIME } from 'sequelize/types';
import { any } from 'sequelize/types/lib/operators';
import IdentidadPsql from '../../../dataSources/IdentidadPsql.dataSources';
import Identidad from '../../models/Identidad';
import IdentidadRepository from '../../repositories/identidad.repository';
import RespuestaIdentidad from './RespuestaIdentidad';

const getByIdIdentidad = (
  identidadRepository: IdentidadRepository,
) => async (cantMaxima:number): Promise<Identidad|null>  => {
		
			try {
        let identidad:Identidad|null=null;
        for (let index = 1; index <=cantMaxima; index++) {
          let numeroGenerado:number= Math.round(Math.random() * (1000 - 1) + 1);
          const respuesta:Identidad|null=await identidadRepository.findById(numeroGenerado);
        if(respuesta){ 
         return identidad;
        }
        }
        return null;
      } catch (e) {
        return null;
      }

};

export default getByIdIdentidad;
