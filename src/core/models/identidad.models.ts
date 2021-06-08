import { DataTypes, Model } from 'sequelize';
import db from '../../database/database'
interface IdentidadI {
	idNum: number;
	nombres: string;
}

export class IdentidadModel extends Model<IdentidadI> {}

IdentidadModel.init(
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
		timestamps: false,
		sequelize: db,
		tableName: 'identidad',
	}
); 