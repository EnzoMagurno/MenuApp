// * RESTAURANT MODEL => Card, IdAdmin

import { DataTypes, Model, Sequelize } from 'sequelize';

module.exports = (sequelize: Sequelize) => {
    sequelize.define('Restaurant', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
        { timestamps: false });
};
