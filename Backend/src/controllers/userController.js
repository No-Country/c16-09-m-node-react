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
};

module.exports = controller;