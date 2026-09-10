import {Entity, model, property} from '@loopback/repository';

@model()
export class Order extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  bookId: string;

  @property({
    type: 'string',
  })
  bookTitle?: string;

  @property({
    type: 'string',
  })
  customerName?: string;

  @property({
    type: 'number',
    required: true,
    default: 1,
  })
  quantity: number;

  @property({
    type: 'string',
    default: 'PENDING',
  })
  status?: string;

  @property({
    type: 'date',
    default: () => new Date(),
  })
  createdAt?: string;

  constructor(data?: Partial<Order>) {
    super(data);
  }
}

export interface OrderRelations {
  // describe navigational properties here
}

export type OrderWithRelations = Order & OrderRelations;
