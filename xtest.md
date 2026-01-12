Below is the same list, now with **PUT examples and ready JSON bodies for inserting sample data**.

---

## Categories

**Get all categories**
[http://localhost:8080/api/categories](http://localhost:8080/api/categories)

**Get category by ID**
[http://localhost:8080/api/categories/{id}](http://localhost:8080/api/categories/{id})

**Create category – sample JSON**

```json
{
  "name": "Electronics",
  "description": "Electronic devices and gadgets"
}
```

**Update category (PUT)**
`PUT http://localhost:8080/api/categories/{id}`
Body:

```json
{
  "name": "Consumer Electronics",
  "description": "Phones, laptops and accessories"
}
```

---

## Products

**Get all products**
[http://localhost:8080/api/products](http://localhost:8080/api/products)

**Get product by ID**
[http://localhost:8080/api/products/{id}](http://localhost:8080/api/products/{id})

**Create product – sample JSON**

```json
{
  "name": "Laptop",
  "price": 1200,
  "description": "A powerful business laptop",
  "categoryId": "REPLACE_WITH_CATEGORY_ID",
  "inStock": true,
  "quantity": 10
}
```

**Update product (PUT)**
`PUT http://localhost:8080/api/products/{id}`
Body:

```json
{
  "name": "Gaming Laptop",
  "price": 1500,
  "description": "High-performance gaming laptop",
  "categoryId": "REPLACE_WITH_CATEGORY_ID",
  "inStock": true,
  "quantity": 5
}
```

---

## Cart

**Get user cart**
[http://localhost:8080/api/cart/{userId}](http://localhost:8080/api/cart/{userId})

**Add item to cart – sample JSON**
`POST http://localhost:8080/api/cart/{userId}/items`

```json
{
  "productId": "REPLACE_WITH_PRODUCT_ID",
  "quantity": 2
}
```

**Update cart item (PUT)**
`PUT http://localhost:8080/api/cart/{userId}/items/{id}`

```json
{
  "quantity": 3
}
```

---

## Delete Actions

Delete category
`DELETE http://localhost:8080/api/categories/{id}`

Delete product
`DELETE http://localhost:8080/api/products/{id}`

Delete cart item
`DELETE http://localhost:8080/api/cart/{userId}/items/{id}`

Delete user cart
`DELETE http://localhost:8080/api/cart/{userId}`

---

**Q1:** Do you want bulk insert endpoints for products in xxxxxxxxx?
**Q2:** Should product price validation block values below 0?
**Q3:** Do you want cart totals returned automatically with each cart request?
