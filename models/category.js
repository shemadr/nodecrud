const { v4: uuidv4 } = require('uuid');

const categories = [];

class Category {
    constructor(name, description) {
        this.id = uuidv4();
        this.name = name;
        this.description = description;
    }
}

module.exports = { categories, Category };
