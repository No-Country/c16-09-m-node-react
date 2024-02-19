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
      lastName:{
        type:DataTypes.STRING,
        allowNull:false
      },
      DNI:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
      dateOfBirth:{
        type:DataTypes.DATEONLY,
        allowNull: false,
      },
      location:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Provincia'
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Información no disponible'
      },
      loggedIn: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true,
      },
      rol: {
        type: DataTypes.ENUM("passerby", "Admin", "CompanyRepresentative"),
        defaultValue: "passerby",
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
