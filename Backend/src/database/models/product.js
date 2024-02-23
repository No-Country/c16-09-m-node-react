'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Commerce, { foreignKey: "commerceId" });
      Product.belongsTo(models.Category, {foreignKey: 'categoryId'});
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      price: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0.5,
      },
      company: {
        type: DataTypes.STRING,
        defaultValue: "Independiente",
      },
      description: {
        type: DataTypes.STRING,
        defaultValue: "Informacion no suministrada por el comercio",
      },
      offers: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      image:{
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: "Product",
      paranoid: true,
    }
  );
  return Product;
};