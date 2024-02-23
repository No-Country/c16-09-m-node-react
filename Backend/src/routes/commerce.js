const express = require('express');
const router = express.Router();

const commerceLogIn = require('../controllers/commerceLoginController');
const commerceController = require('../controllers/commerceController')

/**
 * @swagger
 * /commerce/register:
 *   post:
 *     summary: Registrar un nuevo comercio
 *     tags: [Commerce]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *               email:
 *                 type: string
 *               location:
 *                 type: string
 *               province:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Comercio registrado con éxito
 *       '500':
 *         description: Error interno del servidor
 */


/**
 * @swagger
 * /commerce/login:
 *   post:
 *     summary: Ingreso para Comercios
 *     tags: [Commerce]
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
 *       200:
 *         description: Objeto con confirmacion booleana de que el comercio existe en BD
 *       500:
 *         description: Error del servidor
 *       400:
 *         description: Error al procesar datos o datos vacíos/tipo incorrecto
 */

router.post('/login', commerceLogIn);
router.post("/register", commerceController.register)
.get('/list', commerceController.read)
.get(`/profile/:id`, commerceController.byId)
.delete('/delete/:id', commerceController.softDelete)

module.exports= router;