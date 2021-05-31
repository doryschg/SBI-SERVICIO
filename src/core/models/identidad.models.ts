/* import { DataTypes, Model } from 'sequelize';
//import db from '../../database/database'
interface IdentidadI {
	idNum: number;
	nombres: string;
}

export class Identidad extends Model<IdentidadI> {}

Identidad.init(
	{
		idNum: {
			type: DataTypes.NUMBER,
			primaryKey: true,
			allowNull: false,
		},
		nombres: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize: db,
		tableName: 'identidad',
	}
); */