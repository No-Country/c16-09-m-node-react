const db = require("../database/models")

const controller = {
  /**
   * @swagger
   * /user/users:
   *   get:
   *     summary: Obtener todos los usuarios
   *     tags: [Users]
   *     responses:
   *       200:
   *         description: Lista de usuarios obtenida con éxito
   *       500:
   *         description: Error del servidor
   */
  index: async function (req, res) {
    let users = await db.User.findAll();
    return res.json(users);
  },
  login: async (req, res) => {
    const userEmail = req.body.email;
    const userPass = req.body.password;

    try {
      const userLogin = await db.User.findOne({
        where: { email: userEmail },
      });
      if (!userLogin) {
        return res.status(404).json({ error: "User not found" });
      }

      if (userLogin.password !== userPass) {
        return res.status(401).json({ error: "Invalid password" });
      }

      return res.json(userLogin);
      
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  }
};

module.exports = controller;