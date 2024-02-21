const { Sequelize } = require("sequelize");
require("dotenv").config({ path: "./.env" });
const { BD_NAME, PASSWORD, USER_NAME } = process.env;
const fs = require("fs");
const path = require("path");

const sequelize = new Sequelize(BD_NAME, USER_NAME, PASSWORD, {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Users, Products, Commerce, Rating, Pay } = sequelize.models;

//Ok mi gente, aqui empieza lo bueno: Las relaciones entre tablas!
Users.hasMany(Products, { as: "products", foreignKey: "usersId" });
Products.belongsTo(Users, { as: "users", foreignKey: "usersId" });
Products.belongsToMany(Commerce, { through: "commerce_products" });
Commerce.belongsToMany(Products, { through: "commerce_products" });

module.exports = { ...sequelize.models, conn: sequelize };
