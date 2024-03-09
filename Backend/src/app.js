require("dotenv").config({ path: "../.env" });
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const routes = require('./handlingRoutes/index')
//const userRoutes = require("./routes/users");
//const commerceRoutes = require("./routes/commerce");
//const productsRoutes = require('./routes/products');
//const categoryRoutes = require('./routes/category')

const server = express();
server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({ limit: "50mb" }));
server.use(morgan("dev"));
server.use(cors());

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "https://encuentratuprecio.onrender.com/");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});


//server.use("/user", userRoutes);
//server.use("/commerce", commerceRoutes);
//server.use("/products", productsRoutes);
//server.use("/category", categoryRoutes);

server.use("/", routes)
server.use("*", async(req, res)=>{
  res.status(404).json({error: 'Esto no entra a ningún lado!'})
})

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
    "./handlingRoutes/index"
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
  server.listen(process.env.MYSQLPORT || 8000, () => {
    console.log(`Listening on port ${process.env.MYSQLPORT || 8000}`);
  });  
} else{
  console.log("hola estamos en el port " + process.env.PORT)
  server.listen(process.env.PORT || 8000, () => {
    console.log(`Listening on port ${process.env.PORT || 8000}`);
  });
}


module.exports = server;
