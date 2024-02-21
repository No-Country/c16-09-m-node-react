"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Usuario1",
          last_name: "Apellido1",
          dni: 12345678,
          date_of_birth: "1990-01-01",
          province: "Provincia1",
          location: "Ciudad1",
          phone_number: "123456789",
          logged_in: false,
          rol: "user",
          password: "contraseña123",
          email: "usuario1@example.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Usuario2",
          last_name: "Apellido2",
          dni: 23456789,
          date_of_birth: "1995-02-02",
          province: "Provincia2",
          location: "Ciudad2",
          phone_number: "987654321",
          logged_in: false,
          rol: "user",
          password: "contraseña456",
          email: "usuario2@example.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Admin",
          last_name: "Root",
          dni: 34567890,
          date_of_birth: "1985-03-03",
          province: "Provincia3",
          location: "Ciudad3",
          phone_number: "555555555",
          logged_in: false,
          rol: "admin",
          password: "contraseñaadmin",
          email: "admin@example.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
