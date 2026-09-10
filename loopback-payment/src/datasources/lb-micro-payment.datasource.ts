import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'lbMicroPayment',
  connector: 'mongodb',
  url: '',
  host: process.env.MONGO_HOST || '127.0.0.1',
  port: process.env.MONGO_PORT ? Number(process.env.MONGO_PORT) : 27017,
  user: '',
  password: '',
  database: 'lb-micro-payment',
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class LbMicroPaymentDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'lbMicroPayment';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.lbMicroPayment', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
