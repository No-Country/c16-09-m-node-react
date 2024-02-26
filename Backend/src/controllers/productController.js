const db = require("../database/models");
const { Op } = require("sequelize");

const controller = {
  read: async function (req, res) {
    try {
      const productsList = await db.Product.findAll({
        include: [{ model: db.Category, attributes: ["id", "name"] }],
      });
console.log(productsList)
      if (productsList.length > 0) res.status(200).json(productsList);
      else
        res
          .status(400)
          .json({ message: "Sorry, theres no info in the DB about products" });
    } catch (error) {
      res.status(400).json(error.message);
    }
  },
  create: async function (req, res) {
    try {
      if (req.body != null) {
        const { name, company, description, offers, image, price } = req.body;
        if (
          (typeof name == "string" &&
            typeof company == "string" &&
            typeof description == "string" &&
            typeof image == "string",
          typeof price == "number")
        ) {
          const verifying = await db.Product.findOne({ where: { name: name } });
          if (verifying != null)
            res.status(400).json("There is a product with the same name");
          const newProduct = await db.Product.create(req.body);
          newProduct != null
            ? res.status(200).json(newProduct)
            : res.status(400).json("There was an error creating the product");
        }
      }
    } catch (error) {
      res.status(400).json(error.message);
    }
  },
  //filter: async function (req, res) {
  //  try {
  //    const { amount } = req.body;
  //    if (amount != null) {
  //      const filtered = await db.Product.findAll({
  //        where: {
  //          price: amount,
  //        },
  //      });
  //      filtered.length > 0
  //        ? res.status(200).json(filtered)
  //        : res
  //            .status(400)
  //            .json({
  //              message: `There isn't any product with that price, apprently. `,
  //            });
  //    }
  //  } catch (error) {
  //    res.status(400).json(error.message);
  //  }
  //},
};

module.exports = controller;
