"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.5,
      },
      company: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "Independiente",
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "Informacion no suministrada por el comercio",
      },
      offers: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: true,
      },
      image:{
        type: Sequelize.STRING,
        allowNull: false
      },
      comerceId: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        references: {
          model: {
            tableName: "Commerces",
          },
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Products");
  },
};
