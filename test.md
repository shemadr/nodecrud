# API Endpoint Tests

## Categories

### Get all categories
```bash
curl http://localhost:8080/api/categories
```

### Create a category
```bash
curl -X POST -H "Content-Type: application/json" -d '{"name": "Electronics", "description": "Electronic devices"}' http://localhost:8080/api/categories
```

### Get a category by ID
```bash
# Replace {id} with an actual category ID
curl http://localhost:8080/api/categories/{id}
```

### Update a category
```bash
# Replace {id} with an actual category ID
curl -X PUT -H "Content-Type: application/json" -d '{"name": "Consumer Electronics", "description": "All kinds of electronic devices"}' http://localhost:8080/api/categories/{id}
```

### Delete a category
```bash
# Replace {id} with an actual category ID
curl -X DELETE http://localhost:8080/api/categories/{id}
```

---

## Products

### Get all products
```bash
curl http://localhost:8080/api/products
```

### Create a product
```bash
# Replace {categoryId} with an actual category ID
curl -X POST -H "Content-Type: application/json" -d '{"name": "Laptop", "price": 1200, "description": "A powerful laptop", "categoryId": "{categoryId}", "inStock": true, "quantity": 10}' http://localhost:8080/api/products
```

### Get a product by ID
```bash
# Replace {id} with an actual product ID
curl http://localhost:8080/api/products/{id}
```

### Update a product
```bash
# Replace {id} with an actual product ID
# Replace {categoryId} with an actual category ID
curl -X PUT -H "Content-Type: application/json" -d '{"name": "Gaming Laptop", "price": 1500, "description": "A more powerful laptop for gaming", "categoryId": "{categoryId}", "inStock": true, "quantity": 5}' http://localhost:8080/api/products/{id}
```

### Delete a product
```bash
# Replace {id} with an actual product ID
curl -X DELETE http://localhost:8080/api/products/{id}
```

---

## Cart

### Get a user's cart
```bash
# Replace {userId} with an actual user ID
curl http://localhost:8080/api/cart/{userId}
```

### Add an item to a user's cart
```bash
# Replace {userId} with an actual user ID
# Replace {productId} with an actual product ID
curl -X POST -H "Content-Type: application/json" -d '{"productId": "{productId}", "quantity": 2}' http://localhost:8080/api/cart/{userId}/items
```

### Update a cart item's quantity
```bash
# Replace {userId} with an actual user ID
# Replace {id} with an actual cart item ID
curl -X PUT -H "Content-Type: application/json" -d '{"quantity": 3}' http://localhost:8080/api/cart/{userId}/items/{id}
```

### Delete a cart item
```bash
# Replace {userId} with an actual user ID
# Replace {id} with an actual cart item ID
curl -X DELETE http://localhost:8080/api/cart/{userId}/items/{id}
```

### Delete a user's cart
```bash
# Replace {userId} with an actual user ID
curl -X DELETE http://localhost:8080/api/cart/{userId}
```