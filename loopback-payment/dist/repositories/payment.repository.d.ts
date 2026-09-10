import { DefaultCrudRepository } from '@loopback/repository';
import { LbMicroPaymentDataSource } from '../datasources';
import { Payment, PaymentRelations } from '../models';
export declare class PaymentRepository extends DefaultCrudRepository<Payment, typeof Payment.prototype.id, PaymentRelations> {
    constructor(dataSource: LbMicroPaymentDataSource);
}
