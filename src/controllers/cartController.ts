import { Request, Response } from 'express';
import { carts, Cart, CartItem } from '../models/cart';
import { products } from '../models/product';

export const getCart = (req: Request, res: Response): void => {
    const { userId } = req.params;
    const cart = carts[userId];
    if (cart) {
        res.json(cart);
    } else {
        res.status(404).json({ message: 'Cart not found' });
    }
};

export const addItemToCart = (req: Request, res: Response): void => {
    const { userId } = req.params;
    const { productId, quantity } = req.body;

    if (!productId || !quantity) {
        res.status(400).json({ message: 'productId and quantity are required' });
        return;
    }

    const product = products.find(p => p.id === productId);
    if (!product) {
        res.status(404).json({ message: 'Product not found' });
        return;
    }

    let cart = carts[userId];
    if (!cart) {
        cart = new Cart(userId);
        carts[userId] = cart;
    }

    const existingItemIndex = cart.items.findIndex(item => item.productId === productId);
    if (existingItemIndex !== -1) {
        cart.items[existingItemIndex].quantity += quantity;
    } else {
        const cartItem = new CartItem(productId, quantity);
        cart.items.push(cartItem);
    }

    res.status(201).json(cart);
};

export const updateCartItem = (req: Request, res: Response): void => {
    const { userId, id } = req.params;
    const { quantity } = req.body;

    if (!quantity) {
        res.status(400).json({ message: 'quantity is required' });
        return;
    }

    const cart = carts[userId];
    if (!cart) {
        res.status(404).json({ message: 'Cart not found' });
        return;
    }

    const itemIndex = cart.items.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
        cart.items[itemIndex].quantity = quantity;
        res.json(cart.items[itemIndex]);
    } else {
        res.status(404).json({ message: 'Item not found in cart' });
    }
};

export const deleteCartItem = (req: Request, res: Response): void => {
    const { userId, id } = req.params;
    const cart = carts[userId];
    if (!cart) {
        res.status(404).json({ message: 'Cart not found' });
        return;
    }

    const itemIndex = cart.items.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
        cart.items.splice(itemIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Item not found in cart' });
    }
};

export const deleteCart = (req: Request, res: Response): void => {
    const { userId } = req.params;
    if (carts[userId]) {
        delete carts[userId];
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Cart not found' });
    }
};
