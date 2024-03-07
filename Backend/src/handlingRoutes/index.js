const {Router} = require('express');

const userRoutes = require("../routes/users");
const commerceRoutes = require("../routes/commerce");
const productsRoutes = require('../routes/products');
const categoryRoutes = require('../routes/category')

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/commerce", commerceRoutes);
routes.use("/products", productsRoutes);
routes.use("/category", categoryRoutes);

module.exports= routes;