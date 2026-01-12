const { carts, Cart, CartItem } = require('../models/cart');
const { products } = require('../models/product');

const getCart = (req, res) => {
    const { userId } = req.params;
    const cart = carts[userId];
    if (cart) {
        res.json(cart);
    } else {
        res.status(404).json({ message: 'Cart not found' });
    }
};

const addItemToCart = (req, res) => {
    const { userId } = req.params;
    const { productId, quantity } = req.body;

    if (!productId || !quantity) {
        return res.status(400).json({ message: 'productId and quantity are required' });
    }

    const product = products.find(p => p.id === productId);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
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

const updateCartItem = (req, res) => {
    const { userId, id } = req.params;
    const { quantity } = req.body;

    if (!quantity) {
        return res.status(400).json({ message: 'quantity is required' });
    }

    const cart = carts[userId];
    if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
    }

    const itemIndex = cart.items.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
        cart.items[itemIndex].quantity = quantity;
        res.json(cart.items[itemIndex]);
    } else {
        res.status(404).json({ message: 'Item not found in cart' });
    }
};

const deleteCartItem = (req, res) => {
    const { userId, id } = req.params;
    const cart = carts[userId];
    if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
    }

    const itemIndex = cart.items.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
        cart.items.splice(itemIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Item not found in cart' });
    }
};

const deleteCart = (req, res) => {
    const { userId } = req.params;
    if (carts[userId]) {
        delete carts[userId];
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Cart not found' });
    }
};

module.exports = {
    getCart,
    addItemToCart,
    updateCartItem,
    deleteCartItem,
    deleteCart
};
