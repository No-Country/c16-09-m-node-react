const server = require("./src/app");
const db = require("./src/database/models/index");

db.sequelize.sync().then(() => {
  if (process.env.DEPLOYMENT_ON == "YES") {
    server.listen(process.env.MYSQLPORT || 8000, () => {
      console.log(`Listening on port ${process.env.MYSQLPORT || 8000}`);
    });
  } else {
    console.log("hola estamos en el port " + process.env.PORT);
    server.listen(process.env.PORT || 8000, () => {
      console.log(`Listening on port ${process.env.PORT || 8000}`);
    });
  }
});
