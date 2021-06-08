import { DataTypes, Model } from 'sequelize';
import db from '../../database/database'
interface IdentidadI {
	idNum: number;
	nombres: string;
	url:String;
}

export class IdentidadModel extends Model<IdentidadI> {}

IdentidadModel.init(
	{
		idNum: {
			type: DataTypes.NUMBER,
			primaryKey: true,
			allowNull: false,
			field: 'id_num',
		},
		nombres: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		url: {
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