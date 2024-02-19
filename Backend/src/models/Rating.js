const {DataTypes, UUIDV4} = require('sequelize');

module.exports = (sequelize)=> {
    sequelize.define('Rating', {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
          },
          comment:{
            type: DataTypes.STRING,
            allowNull: true
          },
          rate: {
            type: DataTypes.INTEGER,
            defaultValue: 0
          }
    }, {timestamps: true, paranoid: true})
}