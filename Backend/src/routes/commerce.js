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

/**
 * @swagger
 * /commerce/delete/{id}:
 *   delete:
 *     summary: Eliminar/suspender un comercio
 *     tags: [Commerce]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Id del comercio a eliminar
 *     responses:
 *     200:
 *       description: The commerce with the id ${id} was sucessfully deleted/banned
 *     400:
 *       description: Something went wrong deleting this. Try later please or error message 
 */

/**
 * @swagger
 * /commerce/list:
 *  get:
 *    summary: Obtener lista de comercios registrados
 *    description: Ruta para visualizar la cantidad de comercios registrados
 *    tags: [Commerce]
 *    responses:
 *      200:
 *        description: La lista de los libros como array de objetos
 *      400:
 *        description: "Sorry the information came empty"
 */

/**
 * @swagger
 * /commerce/profile/{id}:
 *   get:
 *     summary: Obtener información de comercio por Id
 *     description: Ruta para obtener informacion sobre un comercio específico
 *     tags: [Commerce]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Id del comercio a buscar
 *     responses:
 *       200:
 *         description: objeto con información del comercio
 *       400:
 *         description: Theres no commerce with that id in the DB or Sorry, the id is not what the DB was expecting or error message
 */

/**
 * @swagger
 * /commerce/restore/{id}:
 *  get:
 *    summary: Restaurar comercio
 *    tags: [Commerce]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: Id del comercio a restaurar
 *    responses:
 *      200:
 *        description: Commerce restored! seguido del comercio restaurado
 *      400:
 *        description: We cant find an instance in the soft deleted records, so maybe that commerce didnt existed in first place or error message 
 */
router.post('/login', commerceLogIn);
router.post("/register", commerceController.register)
.get('/list', commerceController.read)
.get(`/profile/:id`, commerceController.byId)
.delete('/delete/:id', commerceController.softDelete)
.get("/restore/:id", commerceController.restore)

module.exports= router;