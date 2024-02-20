const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Users",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name:{
        type:DataTypes.STRING,
        allowNull:false
      },
      dni:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
      date_of_birth:{
        type:DataTypes.DATEONLY,
        allowNull: false,
      },
      province:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      location:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Información no disponible'
      },
      logged_in: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true,
      },
      rol: {
        type: DataTypes.ENUM('user', 'admin'),
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      mail: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { timestamps: true, paranoid: true }
  );
};
