const db = require('../database/models');
const { op } = require('sequelize');

const controller = {
    index: async function(req, res){
        let category = await db.Category.findAll();
        return res.json(category);
    },
    create: async function(req, res){
        try {
            const{ name } = req.body;
            if(!name){
                return res.status(400).json({error:'Name is required'});
            }
            const category = await db.Category.create({ name });
            return res.status(201).json(category);
        } catch (error) {
            return res.status(500).json({ error: 'Internal server error' });
        }
    },
    update: async function(req, res){
        try {
            const { id } = req.params;
            const { name } = req.body;
            if (!name) {
                return res.status(400).json({ error: 'Name is required' });
            }
            const category = await db.Category.findByPk(id);
            if (!category) {
                return res.status(404).json({ error: 'Category not found' });
            }
            category.name = name;
            await category.save();
            return res.json(category);
        } catch (error) {
            return res.status(500).json({ error: 'Internal server error' });
        }
    },
    delete: async function(req, res){
        try {
            const {id} = req.params
            const category = await db.Category.findByPk(id)
            if(!category) {
                return res.status(404).json({ error: 'Category not found'});
            }
            await category.destroy()
            return res.json({message: 'Category delete successfully'});
        } catch (error) {
            return res.status(500).json({error: 'Internal server error'})
        }
    }
}

module.exports = controller;