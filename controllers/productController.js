const { products, Product } = require('../models/product');
const { categories } = require('../models/category');

const getProducts = (req, res) => {
    res.json(products);
};

const getProduct = (req, res) => {
    const { id } = req.params;
    const product = products.find(p => p.id === id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

const createProduct = (req, res) => {
    const { name, price, description, categoryId, inStock, quantity } = req.body;
    if (!name || !price || !categoryId) {
        return res.status(400).json({ message: 'Name, price, and categoryId are required' });
    }
    const category = categories.find(c => c.id === categoryId);
    if (!category) {
        return res.status(400).json({ message: 'Invalid categoryId' });
    }
    const newProduct = new Product(name, price, description, categoryId, inStock, quantity);
    products.push(newProduct);
    res.status(201).json(newProduct);
};

const updateProduct = (req, res) => {
    const { id } = req.params;
    const { name, price, description, categoryId, inStock, quantity } = req.body;
    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex !== -1) {
        if (categoryId) {
            const category = categories.find(c => c.id === categoryId);
            if (!category) {
                return res.status(400).json({ message: 'Invalid categoryId' });
            }
        }
        products[productIndex] = { ...products[productIndex], name, price, description, categoryId, inStock, quantity };
        res.json(products[productIndex]);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

const deleteProduct = (req, res) => {
    const { id } = req.params;
    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex !== -1) {
        products.splice(productIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};
