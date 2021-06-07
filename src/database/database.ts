import {Sequelize} from "sequelize";

export default  new Sequelize('hex', 'postgres', '12345678', {
   host: 'localhost'
});

