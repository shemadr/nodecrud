const { v4: uuidv4 } = require('uuid');

const products = [];

class Product {
    constructor(name, price, description, categoryId, inStock, quantity) {
        this.id = uuidv4();
        this.name = name;
        this.price = price;
        this.description = description;
        this.categoryId = categoryId;
        this.inStock = inStock;
        this.quantity = quantity;
    }
}

module.exports = { products, Product };
