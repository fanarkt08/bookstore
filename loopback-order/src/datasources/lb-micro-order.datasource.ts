import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'lbMicroOrder',
  connector: 'mongodb',
  url: '',
  host: process.env.MONGO_HOST || '127.0.0.1',
  port: process.env.MONGO_PORT ? Number(process.env.MONGO_PORT) : 27017,
  user: '',
  password: '',
  database: 'lb-micro-order',
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class LbMicroOrderDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'lbMicroOrder';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.lbMicroOrder', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
