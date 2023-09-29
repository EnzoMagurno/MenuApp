//* ADMIN MODEL => ID, NAME, PASSWORD, isAdmin, localName (?)

import { DataTypes, Model, Sequelize } from 'sequelize'

module.exports = (sequelize: Sequelize) => {
    sequelize.define('Admin', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        localName: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
        { timestamps: false }
    )
}