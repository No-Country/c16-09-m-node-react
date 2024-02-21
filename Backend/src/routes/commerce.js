const express = require('express');
const router = express.Router();

const commerceLogIn = require('../controllers/commerceLoginController');

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

module.exports= router;