const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController")

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Operaciones relacionadas con usuarios
 */

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

router.get("/users", userController.index);

module.exports = router;
