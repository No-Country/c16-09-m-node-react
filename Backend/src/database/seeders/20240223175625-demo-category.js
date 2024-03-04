'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert(
       "Categories",
       [
         {
           name: "Almacén",
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           name: "Bebidas",
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           name: "Limpieza",
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           name: "Perfumeria",
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
          name: "Mascotas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
       ],
       {}
     );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  }
};