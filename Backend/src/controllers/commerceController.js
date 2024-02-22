const db = require('../database/models')

const controller = {
    register: async (req, res) => {
        try {
            const { name, address, phoneNumber, email, location, province, password } = req.body;
            const newCommerce = await db.Commerce.create({
              name,
              address,
              phoneNumber,
              email,
              location,
              province,
              password,
            });
            res.status(201).json(newCommerce.toJSON());
        } catch (error) {
              console.error("Error al registrar el comercio:", error);
              if (error.name === "SequelizeValidationError") {
                res.status(400).json({ error: "Datos de entrada no válidos" });
              } else {
                res.status(500).json({ error: "Error interno del servidor" });
              }
        }
    }
}

module.exports = controller