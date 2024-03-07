require("dotenv").config({ path: "../.env" });
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

const server = express();

server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({ limit: "50mb" }));
server.use(morgan("dev"));
server.use(cors());

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

const userRoutes = require("./routes/users");
const commerceRoutes = require("./routes/commerce");
const productsRoutes = require('./routes/products');
const categoryRoutes = require('./routes/category')

server.use("/user", userRoutes);
server.use("/commerce", commerceRoutes);
server.use("/products", productsRoutes);
server.use("/category", categoryRoutes);

// Configurar Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Documentación de la API",
      version: "1.0.0",
      description: "Una descripción de la API.",
    },
    servers: [
      {
        url: "http://localhost:8000/",
        description: "Servidor de desarrollo",
      },
      {
        url: "https://encuentratuprecio.onrender.com/",
        description: "Servidor de Despliegue"
      }
    ],
  },
  apis: [
    "./routes/users.js",
    "./controllers/userController.js",
    "./routes/commerce.js",
    "./controllers/commerceLoginController.js",
    "./routes/products.js",
    "./controllers/productController.js",
    "./routes/category.js",
  ],
};
const swaggerSpec = swaggerJSDoc(swaggerOptions);
server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});
if(process.env.DEPLOYMENT_ON == 'YES'){
  server.listen(process.env.DEPLOY_PORT || 8000, () => {
    console.log(`Listening on port ${process.env.DEPLOY_PORT || 8000}`);
  });  
} else{
  server.listen(process.env.PORT || 8000, () => {
    console.log(`Listening on port ${process.env.PORT || 8000}`);
  });
}


module.exports = server;
