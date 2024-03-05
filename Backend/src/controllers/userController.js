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
  },
  delete: async function(req, res){
    try {
      const {id} = req.params;

      if(id == null) res.status(404).json({message: 'Sorry, we need an id to continue.'})

      const searchingById = await db.User.findByPk(id);
      if(searchingById != null) {
        await searchingById.destroy();
        return res.status(200).json({message: `The user with the id ${id} was successfully deleted.`})
      } else res.status(404).json({message: 'Sorry, there wasnt any user with that id'})
    } catch (error) {
      res.status(500).json(error.message)
    }
  },
  restore: async function(req, res){
    try {
      const {id} = req.params;

      if(id == null) res.status(404).json({message: 'You need an id for this.'});

      const check1 = await db.User.findByPk(id, {paranoid: false});

      if(check1 == null) res.status(404).json({message: 'Sorry, we cannot find any instance with that id in the softdeleted records.'})
      else {
    const restored = await check1.restore();
return res.status(200).json({message: 'Restored Succesfully!', restored})
    }
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
};

module.exports = controller;