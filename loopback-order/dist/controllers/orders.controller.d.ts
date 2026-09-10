import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Order } from '../models';
import { OrderRepository } from '../repositories';
export declare class OrdersController {
    orderRepository: OrderRepository;
    constructor(orderRepository: OrderRepository);
    create(order: Omit<Order, 'id'>): Promise<Order>;
    count(where?: Where<Order>): Promise<Count>;
    find(filter?: Filter<Order>): Promise<Order[]>;
    updateAll(order: Order, where?: Where<Order>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Order>): Promise<Order>;
    updateById(id: string, order: Order): Promise<void>;
    replaceById(id: string, order: Order): Promise<void>;
    deleteById(id: string): Promise<void>;
}
