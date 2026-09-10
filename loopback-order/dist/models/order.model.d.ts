import { Entity } from '@loopback/repository';
export declare class Order extends Entity {
    id?: string;
    bookId: string;
    bookTitle?: string;
    customerName?: string;
    quantity: number;
    status?: string;
    createdAt?: string;
    constructor(data?: Partial<Order>);
}
export interface OrderRelations {
}
export type OrderWithRelations = Order & OrderRelations;
