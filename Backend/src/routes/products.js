const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path')

const productController = require('../controllers/productController');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, '../public/uploads')
    },
    filename: function(req, file, cb){
        let nameOfFile = 'img-product-' + Date.now() + path.extname(file.originalname)
        cb(null, nameOfFile)
    },
});

const upload = multer({ storage: storage });

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
router.post('/create', upload.single('image'), productController.create);
router.delete('/delete/:id', productController.softDelete);
router.get('/restore/:id', productController.restore)
router.put("/update/:id", upload.single("image"), productController.update);

module.exports = router;