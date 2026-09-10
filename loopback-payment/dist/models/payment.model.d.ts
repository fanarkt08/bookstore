import { Entity } from '@loopback/repository';
export declare class Payment extends Entity {
    id?: string;
    orderId: string;
    amount: number;
    method?: string;
    status?: string;
    paidAt?: string;
    constructor(data?: Partial<Payment>);
}
export interface PaymentRelations {
}
export type PaymentWithRelations = Payment & PaymentRelations;
