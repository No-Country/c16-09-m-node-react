const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const userCreateController = require("../controllers/userCreateController");
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

/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: Registrar datos de usuario
 *     tags: [Users]
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * Name: string
 * last_name: string
 * dni: integer
 * date_of_birth: dateonly
 * mail: string
 * location: string
 * province: string
 * logged_in: boolean
 * password: string
 * phone_number: string
 *     responses:
 *       200:
 *         description: Un objeto el usuario creado
 *       500:
 *         description: Error del servidor
 * 400:
 * description: Error al procesar datos o usuario ya registrado previamente
 */

router
  .get("/users", userController.index)
  .post("/register", userCreateController);

module.exports = router;
