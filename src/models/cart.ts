import { v4 as uuidv4 } from 'uuid';

export interface ICartItem {
    id: string;
    productId: string;
    quantity: number;
}

export interface ICart {
    userId: string;
    items: ICartItem[];
}

export class CartItem implements ICartItem {
    id: string;
    productId: string;
    quantity: number;

    constructor(productId: string, quantity: number) {
        this.id = uuidv4();
        this.productId = productId;
        this.quantity = quantity;
    }
}

export class Cart implements ICart {
    userId: string;
    items: ICartItem[];

    constructor(userId: string) {
        this.userId = userId;
        this.items = [];
    }
}

export const carts: Record<string, ICart> = {};
