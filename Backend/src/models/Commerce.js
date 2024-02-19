const {Datatypes, UUIDV4} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Commerce', {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
          },
        business_name: {
            type: Datatypes.STRING,
            allowNull: false
        },
        address: {
            type: Datatypes.STRING,
            allowNull: false
        },
        phone_number: {
            type: Datatypes.INTEGER,
            allowNull: true
        },
        mail:{
            type:Datatypes.STRING,
            allowNull: false
        },
        location:{
            //A futuro podemos colocarle ENUM mejor pero necesitamos la info
            type: Datatypes.STRING,
            allowNull: false,
            defaultValue: 'Bahía Blanca'
        },
        province:{
            type: Datatypes.STRING,
            allowNull: false,
            defaultValue: 'Buenos Aires'
        },
        password: {
            type: Datatypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: true, paranoid: true
    })
}