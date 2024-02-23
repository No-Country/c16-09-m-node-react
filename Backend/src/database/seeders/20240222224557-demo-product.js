'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products",
    [{
      name: "Arroz",
      price: 3.4,
      company: "Ajolote Inversiones",
      description: "Arroz de materia prima cultivado en Argentina",
      offers: false,
      image: "https://c8.alamy.com/compes/ky7edk/en-la-bolsa-de-arroz-jazmin-aislado-sobre-fondo-blanco-ky7edk.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Docena de Fanta Naranjaa",
      price: 28.34,
      company: "The Coca Cola Company",
      description: "Paquete al por mayor de doce bebidas de refrescante Fanta... Marca registrada",
      offers: true,
      image: "https://www.coca-cola.com/content/dam/onexp/gt/es/brands/fanta/es_fanta_prod_naranja-600mL_750x750_v1.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Mate Rosamonte",
      price: 2.5,
      company: "Rosamonte",
      description: "1kg de yerba Rosamonte para hacer mate",
      offers: false,
      image: "https://ss302.liverpool.com.mx/xl/1058631201.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Leche",
      price: 7,
      company: "DM Inversiones",
      description: "Leche en polvo nutritiva con vitaminas",
      offers: true,
      image: "https://www.carniceriaelviejopueblo.com/wp-content/uploads/2022/08/COMPUESTO-LACTEO-400G-PARIMA.jpeg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Brekkies",
      price: 5,
      company: "Independiente",
      description: "Comida para gato importada!",
      offers: false,
      image: "https://cdn-consum.aktiosdigitalservices.com/tol/consum/media/product/img/300x300/7159973_001.jpg?t=20220823040001",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Arroz Mary",
      price: 2.5,
      company: "Mary Inversiones",
      description: "Arroz de materia prima cultivado en Valenzuela",
      offers: false,
      image: "https://www.automercadosemporium.com/DB-IMG-PRODUCT/0403010013/ImgThumb.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Queso casero",
      price: 6.9,
      company: "Independiente",
      description: "Queso Casero 100% Real No Fake artesanal muy nutritivo #dejo de comprarlo en el local de al lado",
      offers: true,
      image: "https://t3.ftcdn.net/jpg/02/36/56/04/360_F_236560455_C1axpAhmAMxQQflKbP6GYWpsOAvMpIYs.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}
    );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
