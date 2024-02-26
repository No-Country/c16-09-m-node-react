'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Commerce extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Commerce.hasMany(models.Product, { foreignKey: "commerceId" })
    }
  }
  Commerce.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      phoneNumber: DataTypes.INTEGER,
      email: DataTypes.STRING,
      location: DataTypes.STRING,
      province: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Commerce",
      paranoid: true,
    }
  );
  return Commerce;
};