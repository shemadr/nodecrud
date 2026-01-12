const express = require('express');
const router = express.Router();
const {
    getCart,
    addItemToCart,
    updateCartItem,
    deleteCartItem,
    deleteCart
} = require('../controllers/cartController');

router.get('/:userId', getCart);
router.post('/:userId/items', addItemToCart);
router.put('/:userId/items/:id', updateCartItem);
router.delete('/:userId/items/:id', deleteCartItem);
router.delete('/:userId', deleteCart);

module.exports = router;
