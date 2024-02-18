const { Sequelize } = require("sequelize");
require("dotenv").config({ path: "./.env" });
const { BD_NAME, PASSWORD, USER_NAME } = process.env;

const sequelize = new Sequelize(BD_NAME, USER_NAME, PASSWORD, {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

const { Users } = sequelize.models;

module.exports = { ...sequelize.models, conn: sequelize };
