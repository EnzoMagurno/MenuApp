//* ADMIN MODEL => ID, NAME, PASSWORD, isAdmin, localName (?)

const { DataTypes, Model, Sequelize }= require( 'sequelize')

module.exports = (sequelize) => {
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