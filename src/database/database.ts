import { Pool } from "pg";
import {Sequelize} from "sequelize";

export const pool=new Pool({
    user:'postgres',
    host:'localhost',
    password:'12345678',
    database:'hex',
    port:5432
});

/* export  const  sequelize = new Sequelize('hex', 'postgres', '12345678', {
   host: 'localhost'
}); */

