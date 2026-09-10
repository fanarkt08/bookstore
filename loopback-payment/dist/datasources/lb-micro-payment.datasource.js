"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LbMicroPaymentDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
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
let LbMicroPaymentDataSource = class LbMicroPaymentDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
exports.LbMicroPaymentDataSource = LbMicroPaymentDataSource;
LbMicroPaymentDataSource.dataSourceName = 'lbMicroPayment';
LbMicroPaymentDataSource.defaultConfig = config;
exports.LbMicroPaymentDataSource = LbMicroPaymentDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.lbMicroPayment', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], LbMicroPaymentDataSource);
//# sourceMappingURL=lb-micro-payment.datasource.js.map