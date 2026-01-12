const { categories, Category } = require('../models/category');

const getCategories = (req, res) => {
    res.json(categories);
};

const getCategory = (req, res) => {
    const { id } = req.params;
    const category = categories.find(c => c.id === id);
    if (category) {
        res.json(category);
    } else {
        res.status(404).json({ message: 'Category not found' });
    }
};

const createCategory = (req, res) => {
    const { name, description } = req.body;
    if (!name) {
        return res.status(400).json({ message: 'Name is required' });
    }
    const newCategory = new Category(name, description);
    categories.push(newCategory);
    res.status(201).json(newCategory);
};

const updateCategory = (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    const categoryIndex = categories.findIndex(c => c.id === id);
    if (categoryIndex !== -1) {
        categories[categoryIndex] = { ...categories[categoryIndex], name, description };
        res.json(categories[categoryIndex]);
    } else {
        res.status(404).json({ message: 'Category not found' });
    }
};

const deleteCategory = (req, res) => {
    const { id } = req.params;
    const categoryIndex = categories.findIndex(c => c.id === id);
    if (categoryIndex !== -1) {
        categories.splice(categoryIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Category not found' });
    }
};

module.exports = {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
};
