import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LbMicroPaymentDataSource} from '../datasources';
import {Payment, PaymentRelations} from '../models';

export class PaymentRepository extends DefaultCrudRepository<
  Payment,
  typeof Payment.prototype.id,
  PaymentRelations
> {
  constructor(
    @inject('datasources.lbMicroPayment') dataSource: LbMicroPaymentDataSource,
  ) {
    super(Payment, dataSource);
  }
}
