import { Sequelize, Model, DataTypes, HasManyGetAssociationsMixin,
HasManyAddAssociationMixin,
HasManyHasAssociationMixin,
Association,
HasManyCountAssociationsMixin,
HasManyCreateAssociationMixin,
Optional
 } from 'sequelize';
import db from '../../database/database'

export interface IdentidadAttributes {
	idNum: number;
	nombres: string;
	url:string|null;
}
// Some attributes are optional in `User.build` and `User.create` calls
export interface IdentidadCreationAttributes extends Optional<IdentidadAttributes, "idNum"> {}

export class Identidad extends Model<IdentidadAttributes, IdentidadCreationAttributes>
  implements IdentidadAttributes {
  public idNum!: number; // Note that the `null assertion` `!` is required in strict mode.
  public nombres!: string;
  public url!: string; // for nullable fields
  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Since TS cannot determine model association at compile time
  // we have to declare them here purely virtually
  // these will not exist until `Model.init` was called.
  /* public getProjects!: HasManyGetAssociationsMixin<Project>; // Note the null assertions!
  public addProject!: HasManyAddAssociationMixin<Project, number>;
  public hasProject!: HasManyHasAssociationMixin<Project, number>;
  public countProjects!: HasManyCountAssociationsMixin;
  public createProject!: HasManyCreateAssociationMixin<Project>; */

  // You can also pre-declare possible inclusions, these will only be populated if you
  // actively include a relation.
  //public readonly projects?: Project[]; // Note this is optional since it's only populated when explicitly requested in code

  /* public static associations: {
    projects: Association<User, Project>;
  }; */
}
Identidad.init(
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

