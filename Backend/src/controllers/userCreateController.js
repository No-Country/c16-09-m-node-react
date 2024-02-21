const db = require("../database/models");

const createUser = {
  /**
   * @swagger
   * /user/create:
   *   get:
   *     summary: Registrar datos de usuario
   *     tags: [Users]
   *     responses:
   *       200:
   *         description: El objeto creado a partir de la información para el registro
   *       500:
   *         description: Error del servidor
   *       400:
   * description: Error de creación
   */
  index: async function (information) {
    try {
      const {
        Name,
        last_name,
        dni,
        rol,
        location,
        province,
        phone_number,
        mail,
        password,
        logged_in,
        date_of_birth,
      } = information;

      if (Name == null || dni == null || password == null)
        return {
          message: `I'm sorry, whith half of the information we can't continue. Have a nice day!`,
        };

      const verify = await db.User.findOne({ where: { mail: mail } });

      if (verify != null)
        return { message: "Well, there is an user with the same email" };

      const userCreation = await db.User.create({
        Name,
        last_name,
        dni,
        rol,
        location,
        date_of_birth,
        province,
        phone_number,
        mail,
        password,
        logged_in,
        mail,
      });

      if (userCreation != null || userCreation != undefined)
        return userCreation;
      else
        return {
          message: "Ok, something went wrong, so, lets see what happens",
        };
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

const createUserHandler = async (req, res) => {
  try {
    if (req.body != null || req.body != undefined) {
      const user = await createUser.index(req.body);
      res.status(200).json(user);
    } else res.status(400).json({ message: "You cant send an empty object!" });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = createUserHandler;
