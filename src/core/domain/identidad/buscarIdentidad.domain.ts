
import { response } from 'express';
import { TIME } from 'sequelize/types';
import { any } from 'sequelize/types/lib/operators';
import IdentidadPsql from '../../../dataSources/IdentidadPsql.dataSources';
import Identidad from '../../models/Identidad';
import IdentidadRepository from '../../repositories/identidad.repository';
import RespuestaIdentidad from '../identidad/RespuestaIdentidad';

const buscarIdentidad = (
  identidadRepository: IdentidadRepository,
) => async (cantMaxima:number): Promise<Identidad|null>  => {
  let identidad:Identidad|null=null;
  for (let index = 1; index <=cantMaxima; index++) {
    const numeroGenerado:number= Math.round(Math.random() * (1000 - 1) + 1);
    console.log(numeroGenerado);
    const respuesta:RespuestaIdentidad|null=await identidadRepository.getIdentidad(numeroGenerado);
    console.log(respuesta?.consultar_identidad['?column?']);
    if(respuesta){ 
      identidad= {
        fecha:respuesta.consultar_identidad.fecha,
        nombres:respuesta.consultar_identidad.nombres,
        idNum:respuesta.consultar_identidad.idNum,
        cantIntentos:index,
      }
      if(respuesta.consultar_identidad.respuesta==200){
        return identidad;
      }
      
    }
  }
  return identidad;
};

export default buscarIdentidad;
