"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Usuario1",
          lastName: "Apellido1", // Corregido: last_name a lastName
          dni: 12345678,
          dateOfBirth: "1990-01-01", // Corregido: date_of_birth a dateOfBirth
          province: "Provincia1",
          location: "Ciudad1",
          phoneNumber: "123456789", // Corregido: phone_number a phoneNumber
          rol: "user",
          password: "contraseña123",
          email: "usuario1@example.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Usuario2",
          lastName: "Apellido2",
          dni: 23456789,
          dateOfBirth: "1995-02-02",
          province: "Provincia2",
          location: "Ciudad2",
          phoneNumber: "987654321",
          rol: "user",
          password: "contraseña456",
          email: "usuario2@example.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Admin",
          lastName: "Root",
          dni: 34567890,
          dateOfBirth: "1985-03-03",
          province: "Provincia3",
          location: "Ciudad3",
          phoneNumber: "555555555",
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
