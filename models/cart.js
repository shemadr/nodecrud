const { v4: uuidv4 } = require('uuid');

const carts = {};

class CartItem {
    constructor(productId, quantity) {
        this.id = uuidv4();
        this.productId = productId;
        this.quantity = quantity;
    }
}

class Cart {
    constructor(userId) {
        this.userId = userId;
        this.items = [];
    }
}

module.exports = { carts, Cart, CartItem };
