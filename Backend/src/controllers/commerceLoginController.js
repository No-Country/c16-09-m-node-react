const db = require("../database/models");

const commerceLogin = {
  index: async function (email, passValue) {
    try {
      if (email == null || passValue == null)
        return {
          message:
            "Without the right data, the right answer cannot be acquired",
        };
      else if (email == "" || passValue == "")
        return {
          message:
            "Im so sorry, empty strings are not valid as inputs here. Put the correct inputs please",
        };
      const verify = await db.Commerce.findOne({
        where: { email: email, password: passValue },
      });
      console.log(verify);
      if (verify != null) return verify;
      else return { message: "It looks like the commerce is not in the DB" };
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

const handlerLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email == undefined || password == undefined)
      res.status(400).json({ message: "Sorry, we need both values for login" });
    else if (typeof email != "string" || typeof password != "string")
      res
        .status(400)
        .json({
          message: `The data we need are strings, not an ${typeof email} or ${typeof password}`,
        });

    const theLogin = await commerceLogin.index(email, password);

    res.status(200).json(theLogin);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = handlerLogin;
