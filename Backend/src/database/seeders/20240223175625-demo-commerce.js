"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Commerces", [
      {
        name: "Negocio 1",
        address: "Dirección 1",
        phoneNumber: 123456789,
        email: "negocio1@example.com",
        location: "Ciudad 1",
        province: "Provincia 1",
        password: "contraseña1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Negocio 2",
        address: "Dirección 2",
        phoneNumber: 987654321,
        email: "negocio2@example.com",
        location: "Ciudad 2",
        province: "Provincia 2",
        password: "contraseña2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Negocio 3",
        address: "Dirección 3",
        phoneNumber: 246813579,
        email: "negocio3@example.com",
        location: "Ciudad 3",
        province: "Provincia 3",
        password: "contraseña3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Negocio 4",
        address: "Dirección 4",
        phoneNumber: 135792468,
        email: "negocio4@example.com",
        location: "Ciudad 4",
        province: "Provincia 4",
        password: "contraseña4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Commerces", null, {});
  },
};
