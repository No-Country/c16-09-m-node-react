const { Sequelize } = require("sequelize");
require("dotenv").config({ path: "./.env" });
const { BD_NAME, PASSWORD, USER_NAME } = process.env;

const sequelize = new Sequelize(BD_NAME, USER_NAME, PASSWORD, {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

const { Users, Products, Commerce, Rating, Pay } = sequelize.models;

//Ok mi gente, aqui empieza lo bueno: Las relaciones entre tablas!
Users.hasMany(Products, {as: 'products', foreignKey: "usersId"});

Products.belongsToMany(Commerce, {through: 'commerce_products'});
Commerce.belongsToMany(Products, {through: 'commerce_products'});

Rating.belongsTo(Products, {as: 'products', foreignKey: 'productId'});
Rating.belongsTo(Users, {as: 'users', foreignKey: 'usersId'});

Pay.belongsTo(Users, {as:'users', foreignKey: 'usersId'});
Pay.hasMany(Products, {as: 'products', foreignKey: 'productsId'});



module.exports = { ...sequelize.models, conn: sequelize };
