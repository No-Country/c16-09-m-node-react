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
            //A futuro podemos colocarle ENUM mejor pero necesitamos la info
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'Bahía Blanca'
        },
        province:{
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'Buenos Aires'
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: true, paranoid: true
    })
}