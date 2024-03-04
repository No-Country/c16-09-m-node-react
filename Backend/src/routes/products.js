const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const productController = require("../controllers/productController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let pathArchives = path.join(__dirname, "../public/uploads");
    cb(null, pathArchives);
  },
  filename: function (req, file, cb) {
    let nameOfFile = "img-product-" + Date.now() + path.extname(file.originalname);
    cb(null, nameOfFile);
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

/**
 * @swagger
 * /products/create:
 *   post:
 *     summary: Crear un nuevo producto
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               company:
 *                 type: string
 *               description:
 *                 type: string
 *               image:
 *                type: string
 *                format: binary
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Producto creado con éxito
 *       400:
 *         description: Error al crear el producto
 */

/**
 * @swagger
 * /products/delete/{id}:
 *   delete:
 *     summary: Eliminar un producto
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Producto eliminado con éxito
 *       400:
 *         description: Error al eliminar el producto
 */

/**
 * @swagger
 * /products/restore/{id}:
 *   get:
 *     summary: Restaurar un producto eliminado
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto a restaurar
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Producto restaurado con éxito
 *       400:
 *         description: Error al restaurar el producto
 */

/**
 * @swagger
 * /products/update/{id}:
 *   put:
 *     summary: Actualizar un producto
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto a actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               company:
 *                 type: string
 *               description:
 *                 type: string
 *               image:
 *                type: string
 *                format: binary
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Producto actualizado con éxito
 *       400:
 *         description: Error al actualizar el producto
 */

router.get("/List", productController.read);
router.post("/create", upload.single("image"), productController.create);
router.delete("/delete/:id", productController.softDelete);
router.get("/restore/:id", productController.restore);
router.put("/update/:id", upload.single("image"), productController.update);
router.post("/filterByLocation", productController.filterByLocation)
router.get("/filterCategory", productController.filterByCategory)
module.exports = router;
