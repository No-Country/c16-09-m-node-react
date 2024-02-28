const db = require("../database/models");
const { Op } = require("sequelize");
const path = require("path");
const fs = require("fs");

const controller = {
  read: async function (req, res) {
    try {
      const productsList = await db.Product.findAll({
        include: [{ model: db.Category, attributes: ["id", "name"] }],
      });
      console.log(productsList);
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
      if (!req.body) {
        return res
          .status(400)
          .json({ message: "No product data has been sent." });
      }

      const { name, company, description, offers, price } = req.body;

      if (!req.file) {
        return res
          .status(400)
          .json({ message: "No image has been sent." });
      }

      const verifying = await db.Product.findOne({ where: { name } });
      if (verifying) {
        return res
          .status(400)
          .json({ message: "There is already a product with this name." });
      }

      const imagePath = req.file.path;

      const newProduct = await db.Product.create({
        name,
        company,
        description,
        offers,
        price,
        image: imagePath,
      });
      if (newProduct) {
        return res.status(200).json({
          message: "Successfully created product.",
          product: newProduct,
        });
      } else {
        return res
          .status(400)
          .json({ message: "There was an error creating the product." });
      }
    } catch (error) {
      res.status(400).json(error.message);
    }
  },
  softDelete: async function (req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          message: "A valid ID is required to delete the product.",
        });
      }

      const product = await db.Product.findByPk(id);

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      await db.Product.destroy({ where: { id: id } });

      return res.status(200).json({
        message: `The product with the id ${id} was successfully deleted`,
      });
    } catch (error) {
      res.status(400).json(error.message);
    }
  },
  restore: async function (req, res) {
    try {
      const { id } = req.params;

      if (id == null) res.status(400).json("We need an id... please");
      console.log(typeof id);
      const toRestore = await db.Product.findByPk(id, { paranoid: false });

      if (toRestore != null && toRestore.deletedAt != null) {
        await toRestore.restore();
        res
          .status(200)
          .json({ message: "Product restored successfully", toRestore });
      } else
        res
          .status(400)
          .json({ message: "There wasnt any product to restore, sorry" });
    } catch (error) {
      res.status(400).json(error.message);
    }
  },
  update: async function (req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          message: "A valid ID is required to update the product.",
        });
      }

      const checking = await db.Product.findByPk(id);
      if (!checking) {
        return res.status(404).json({ message: "Product not found" });
      }

      const { name, company, description, price } = req.body;

      let imagePath = checking.image;
      if (req.file) {
        imagePath = req.file.path;
      }

      const updatedFields = {
        name: name ? name : checking.name,
        company: company ? company : checking.company,
        description: description ? description : checking.description,
        image: imagePath,
        price: price ? price : checking.price,
      };

      const updatedProduct = await checking.update(updatedFields);
      if (updatedProduct) {
        return res.status(200).json({
          message: "Product updated successfully.",
          product: updatedProduct,
        });
      } else {
        return res
          .status(400)
          .json({ message: "There was an error updating the product." });
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
