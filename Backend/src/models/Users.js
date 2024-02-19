const { Datatypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Users",
    {
      id: {
        type: Datatypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
      },
      name: {
        type: Datatypes.STRING,
        allowNull: false,
      },
      lastName:{
        type:Datatypes.STRING,
        allowNull:false
      },
      DNI:{
        type: Datatypes.INTEGER,
        allowNull: false
      },
      dateOfBirth:{
        type:Datatypes.DATEONLY,
        allowNull: false,
      },
      location:{
        type: Datatypes.STRING,
        allowNull: false,
        defaultValue: 'Provincia'
      },
      phone_number: {
        type: Datatypes.STRING,
        allowNull: false,
        defaultValue: 'Información no disponible'
      },
      loggedIn: {
        type: Datatypes.BOOLEAN,
        defaultValue: false,
        allowNull: true,
      },
      rol: {
        type: Datatypes.ENUM("passerby", "Admin", "CompanyRepresentative"),
        defaultValue: "passerby",
        allowNull: true,
      },
      password: {
        type: Datatypes.STRING,
        allowNull: false
      },
      mail: {
        type: Datatypes.STRING,
        allowNull: true,
      },
    },
    { timestamps: true, paranoid: true }
  );
};
