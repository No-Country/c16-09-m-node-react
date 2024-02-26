const db = require("../database/models");

const createUser = {
  index: async function (information) {
    try {
      const {
        name,
        last_name,
        dni,
        rol,
        location,
        province,
        phone_number,
        email,
        password,
        date_of_birth,
      } = information;

      if (name == null || dni == null || password == null)
        return {
          message: `I'm sorry, with half of the information we can't continue. Have a nice day!`,
        };

      const verify = await db.User.findOne({ where: { email: email } });

      if (verify != null)
        return { message: "Well, there is an user with the same email" };

      const userCreation = await db.User.create(information);

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
