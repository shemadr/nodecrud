import { Request, Response } from 'express';
import { products, Product } from '../models/product';
import { categories } from '../models/category';

export const getProducts = (_req: Request, res: Response): void => {
    res.json(products);
};

export const getProduct = (req: Request, res: Response): void => {
    const { id } = req.params;
    const product = products.find(p => p.id === id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

export const createProduct = (req: Request, res: Response): void => {
    const { name, price, description, categoryId, inStock, quantity } = req.body;
    if (!name || !price || !categoryId) {
        res.status(400).json({ message: 'Name, price, and categoryId are required' });
        return;
    }
    const category = categories.find(c => c.id === categoryId);
    if (!category) {
        res.status(400).json({ message: 'Invalid categoryId' });
        return;
    }
    const newProduct = new Product(name, price, description, categoryId, inStock, quantity);
    products.push(newProduct);
    res.status(201).json(newProduct);
};

export const updateProduct = (req: Request, res: Response): void => {
    const { id } = req.params;
    const { name, price, description, categoryId, inStock, quantity } = req.body;
    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex !== -1) {
        if (categoryId) {
            const category = categories.find(c => c.id === categoryId);
            if (!category) {
                res.status(400).json({ message: 'Invalid categoryId' });
                return;
            }
        }
        products[productIndex] = { ...products[productIndex], name, price, description, categoryId, inStock, quantity };
        res.json(products[productIndex]);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

export const deleteProduct = (req: Request, res: Response): void => {
    const { id } = req.params;
    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex !== -1) {
        products.splice(productIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};
