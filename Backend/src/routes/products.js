const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Operaciones relacionadas con productos
 */

/**
 * @swagger
 * /products/List:
 *   get:
 *     summary: Obtener todos los productos
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Lista de productos obtenida con éxito
 *       500:
 *         description: Error del servidor
 */

router.get('/List', productController.read);
router.post('/create', productController.create);
router.delete('/delete/:id', productController.softDelete);
router.get('/restore/:id', productController.restore)
router.put('/update/:id', productController.update)

module.exports = router;