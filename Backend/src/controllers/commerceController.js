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
    },
    read: async function(req, res){
      try {
        const DBCommerce = await db.Commerce.findAll();

        if(DBCommerce.length > 0 || DBCommerce != null) res.status(200).json(DBCommerce)
else res.status(400).json({message: 'Sorry, the information came empty'});
      } catch (error) {
        res.status(400).json(error.message)
      }
    },
    byId: async function(req, res){
      try {
        const {id} = req.params;

        if(id != null && typeof id == 'number'){
          const searchById = await db.Commerce.findByPk(id);

          if(searchById != null) res.status(200).json(searchById)
          else res.status(400).json({message: 'Theres no commerce with that id in the DB'})

        } else res.status(400).json({message: 'Sorry, the id isnot what the DB was expecting.'})
      } catch (error) {
        res.status(400).json(error.message)
      }
    },
    softDelete: async function(req, res){
      try {
        const {id} =req.params;

        if(id!= null && typeof id == 'number'){
           await db.Commerce.destroy({where: {id: id}});
          const checking = await db.Commerce.findByPk(id);

          if(checking == null) res.status(200).json({message: `The commerce with the id ${id} was sucessfully deleted/banned`})
          else res.status(400).json({message: 'Something went wrong deleting this. Try later please'})
        }
      } catch (error) {
        res.status(400).json(error.message);
      }
    },
    restore: async function(req, res){
      try {
        const {id} = req.params;
let restored;
        if(id != null && typeof id == 'number'){
          const commerceToRestore = await db.Commerce.findByPk(id, {paranoid: false});

          if(commerceToRestore != null) {
            restored = await commerceToRestore.restore();
            res.status(200).json({message: 'Commerce Restored!', restored});
          } else res.status(400).json({message: 'We cant find an instance in the soft deleted records, so maybe that commerce didnt existed in first place'});
        }
      } catch (error) {
        res.status(400).json(error.message)
      }
    }
}

module.exports = controller