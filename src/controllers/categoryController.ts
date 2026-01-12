import { Request, Response } from 'express';
import { categories, Category } from '../models/category';

export const getCategories = (_req: Request, res: Response): void => {
    res.json(categories);
};

export const getCategory = (req: Request, res: Response): void => {
    const { id } = req.params;
    const category = categories.find(c => c.id === id);
    if (category) {
        res.json(category);
    } else {
        res.status(404).json({ message: 'Category not found' });
    }
};

export const createCategory = (req: Request, res: Response): void => {
    const { name, description } = req.body;
    if (!name) {
        res.status(400).json({ message: 'Name is required' });
        return;
    }
    const newCategory = new Category(name, description);
    categories.push(newCategory);
    res.status(201).json(newCategory);
};

export const updateCategory = (req: Request, res: Response): void => {
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

export const deleteCategory = (req: Request, res: Response): void => {
    const { id } = req.params;
    const categoryIndex = categories.findIndex(c => c.id === id);
    if (categoryIndex !== -1) {
        categories.splice(categoryIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Category not found' });
    }
};
