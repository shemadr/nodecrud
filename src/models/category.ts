import { v4 as uuidv4 } from 'uuid';

export interface ICategory {
    id: string;
    name: string;
    description?: string;
}

export class Category implements ICategory {
    id: string;
    name: string;
    description?: string;

    constructor(name: string, description?: string) {
        this.id = uuidv4();
        this.name = name;
        this.description = description;
    }
}

export const categories: ICategory[] = [];
