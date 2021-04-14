import {BuildOptions, DataTypes, Model, Sequelize} from "sequelize";

export interface distanceAttributes {
    id?: number,
    source: string,
    destination: string,
    distance: number,
    hits?: number
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
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        hits: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        }
    }, {
        timestamps: true,
        tableName: 'distance',
    });
}