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
      categoryId: 1,
      commerceId: 6,
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
      categoryId: 2,
      commerceId: 6,
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
      categoryId: 1,
      commerceId: 5,
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
      categoryId: 1,
      commerceId: 5,
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
      categoryId: 5,
      commerceId: 5,
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
      categoryId: 1,
      commerceId: 5,
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
      categoryId: 1,
      commerceId: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Café",
      price: 3,
      company: "Independiente",
      description: "Paca de 12 paquetes de 100 gramos cada una. Café de alta calidad y certificado",
      offers: true,
      image: "https://img.freepik.com/psd-premium/maqueta-paquete-cafe_373676-29.jpg",
      categoryId: 1,
      commerceId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Palomitas de maíz para microondas",
      price: 1.2,
      company: "Independiente",
      description: "Palomitas de maíz de microondas sencillas de cocinar (puedes usar baño María para concinarlos, Así se sencillo!)",
      offers: true,
      categoryId: 1,
      commerceId: 6,
      image: "https://supermercados.soyelgeek.com/wp-content/uploads/2021/09/pjZgM04-TW.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Café Madrid",
      price: 1.5,
      company: "Independiente",
      description: "Café Brasilero",
      offers: true,
      categoryId: 1,
      commerceId: 6,
      image: "https://caraotamarket.com/6946-large_default/cafe-madrid-250g.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Pollo",
      price: 3.5,
      company: "Independiente",
      description: "Pollo lavado, precio por kilo",
      offers: true,
      categoryId: 1,
      commerceId: 5,
      image: "https://c8.alamy.com/compes/b93084/todo-el-pollo-crudo-aislado-sobre-un-fondo-blanco-studio-b93084.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Jabon liquido",
      price: 3.2,
      company: "Ariel",
      description: "Jabon liquido listo para usar, envase 1,5 litros",
      offers: true,
      categoryId: 3,
      commerceId: 6,
      image: "https://www.segomarket.com/wp-content/uploads/2022/07/7500435149815.png",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Leche líquida",
      price: 3.6,
      company: "Independiente",
      description: "Leche líquida genérica buena para la salud",
      offers: true,
      categoryId: 1,
      commerceId: 5,
      image: "https://angelicasmarket.com/wp-content/uploads/2021/12/LECHE-LIQUIDA-ENTERA-NATULAC-1LTR.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Papas",
      price: 4,
      company: "La verdurería",
      description: "Papas lavadas y recién traídas del campo",
      offers: false,
      categoryId: 1,
      commerceId: 6,
      image: "https://img.freepik.com/foto-gratis/vista-frontal-saco-arpillera-papas_23-2148599920.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Sopa Ramen",
      price: 4324322,
      company: "Nissin",
      description: "Paquete de sopa instantánea ramen de 85g",
      offers: true,
      categoryId: 1,
      commerceId: 5,
      image: "https://itengoo.com/wp-content/uploads/2019/11/81b2xi7jIQL._SL1500_.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
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
