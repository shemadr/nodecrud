import { v4 as uuidv4 } from 'uuid';

export interface IProduct {
    id: string;
    name: string;
    price: number;
    description?: string;
    categoryId: string;
    inStock: boolean;
    quantity: number;
}

export class Product implements IProduct {
    id: string;
    name: string;
    price: number;
    description?: string;
    categoryId: string;
    inStock: boolean;
    quantity: number;

    constructor(
        name: string,
        price: number,
        description: string | undefined,
        categoryId: string,
        inStock: boolean,
        quantity: number
    ) {
        this.id = uuidv4();
        this.name = name;
        this.price = price;
        this.description = description;
        this.categoryId = categoryId;
        this.inStock = inStock;
        this.quantity = quantity;
    }
}

export const products: IProduct[] = [];
