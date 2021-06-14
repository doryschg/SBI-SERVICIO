import {Sequelize} from "sequelize";

/* export default  new Sequelize(process.env.DB_NAME!, process.env.DB_USER!, process.env.DB_PASS!, {
   host: process.env.DB_HOST!,
   dialect: 'postgres'
}); */

export default  new Sequelize('hex', 'postgres', '12345678', {
   host: 'localhost', 
   dialect: 'postgres',    /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
   logging: false
 });

