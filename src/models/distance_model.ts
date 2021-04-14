import {BuildOptions, DataTypes, Model, Sequelize} from "sequelize";

export interface distanceAttributes {
    id?: number,
    source: string,
    destination: string,
    distance: number
}

export interface distanceModel extends Model<distanceAttributes>, distanceAttributes {
}

export class distance extends Model<distanceModel, distanceAttributes> {
}

export type distanceStatic = typeof Model & {
    new(values?: object, options?: BuildOptions): distanceModel;
};

export function distanceFactory(sequelize: Sequelize): distanceStatic {
    return <distanceStatic>sequelize.define("distance", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        source: {
            type: DataTypes.STRING,
            allowNull: false
        },
        destination: {
            type: DataTypes.STRING,
            allowNull: false
        },
        distance: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        timestamps: true,
        tableName: 'distance',
    });
}