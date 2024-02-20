const {DataTypes, UUIDV4} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Commerce', {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
          },
        business_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone_number: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        mail:{
            type:DataTypes.STRING,
            allowNull: false
        },
        location:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        province:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: true, paranoid: true
    })
}