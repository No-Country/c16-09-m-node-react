const db = require('../database/models');

const controller ={
    read: async function(req, res){
        try {
            const productsList = await db.Product.findAll();
console.log(productsList)
            if(productsList.length>0) res.status(200).json(productsList);
            else res.status(400).json({message: 'Sorry, theres no info in the DB about products'});
        } catch (error) {
            res.status(400).json(error.message)
        }
    }
}

module.exports= controller;