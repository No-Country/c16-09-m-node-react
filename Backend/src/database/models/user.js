"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      lastName: DataTypes.STRING,
      dni: DataTypes.INTEGER,
      dateOfBirth: DataTypes.DATEONLY,
      province: DataTypes.STRING,
      location: DataTypes.STRING,
      phoneNumber: {
        type: DataTypes.STRING,
        defaultValue: "Información no disponible",
      },
      rol: DataTypes.ENUM("user", "admin"),
      password: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      paranoid: true,
    }
  );
  return User;
};
