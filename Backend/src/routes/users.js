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
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               lastName:
 *                 type: string
 *               dni:
 *                 type: integer
 *               dateOfBirth:
 *                 type: string
 *                 format: date
 *               email:
 *                 type: string
 *               location:
 *                 type: string
 *               province:
 *                 type: string
 *               password:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Un objeto el usuario creado
 *       '500':
 *         description: Error del servidor
 *       '400':
 *         description: Error al procesar datos o usuario ya registrado previamente
 */

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Iniciar sesión de usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Inicio de sesión exitoso
 *       '404':
 *         description: Usuario no encontrado o credenciales inválidas
 *       '500':
 *         description: Error interno del servidor
 */
router.get("/users", userController.index);
router.post("/login", userController.login);
router.post("/register", userCreateController);

module.exports = router;
