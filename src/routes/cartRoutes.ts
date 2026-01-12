import express from 'express';
import {
    getCart,
    addItemToCart,
    updateCartItem,
    deleteCartItem,
    deleteCart
} from '../controllers/cartController';

const router = express.Router();

router.get('/:userId', getCart);
router.post('/:userId/items', addItemToCart);
router.put('/:userId/items/:id', updateCartItem);
router.delete('/:userId/items/:id', deleteCartItem);
router.delete('/:userId', deleteCart);

export default router;
