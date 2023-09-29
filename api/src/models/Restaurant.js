// * RESTAURANT MODEL => Card, IdAdmin

const { DataTypes, Model, Sequelize } =require( 'sequelize');

module.exports = (sequelize) => {
    
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
