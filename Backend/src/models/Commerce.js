const {Datatypes, UUIDV4} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Commerce', {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
          },
        name: {
            type: Datatypes.STRING,
            allowNull: false
        },
        zone: {
            type: Datatypes.STRING,
            allowNull: false
        },
        phone_number: {
            type: Datatypes.INTEGER,
            allowNull: true
        }
    }, {
        timestamps: true, paranoid: true
    })
}