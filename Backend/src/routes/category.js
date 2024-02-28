const express = require('express');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: Operaciones relacionadas con categorías
 */

/**
 * @swagger
 * /category/categories:
 *   get:
 *     summary: Obtiene todas las categorías
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: Lista de todas las categorías
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 */

/**
 * @swagger
 * /category/categories:
 *   post:
 *     summary: Crea una nueva categoría
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *             required:
 *               - name
 *     responses:
 *       201:
 *         description: Categoría creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 */

/**
 * @swagger
 * /category/categories/{id}:
 *   put:
 *     summary: Actualiza una categoría existente
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la categoría a actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *             required:
 *               - name
 *     responses:
 *       200:
 *         description: Categoría actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       404:
 *         description: No se encontró la categoría con el ID especificado
 */

/**
 * @swagger
 * /category/categories/{id}:
 *   delete:
 *     summary: Elimina una categoría existente por su ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la categoría a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Categoría eliminada exitosamente
 *       404:
 *         description: No se encontró la categoría con el ID especificado
 */

const categoryController = require('../controllers/cateogoryController')

router.get("/categories", categoryController.index);
router.post("/categories", categoryController.create);
router.put("/categories/:id", categoryController.update);
router.delete("/categories/:id", categoryController.delete);

module.exports = router