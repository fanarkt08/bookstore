"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LbMicroOrderDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
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
let LbMicroOrderDataSource = class LbMicroOrderDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
exports.LbMicroOrderDataSource = LbMicroOrderDataSource;
LbMicroOrderDataSource.dataSourceName = 'lbMicroOrder';
LbMicroOrderDataSource.defaultConfig = config;
exports.LbMicroOrderDataSource = LbMicroOrderDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.lbMicroOrder', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], LbMicroOrderDataSource);
//# sourceMappingURL=lb-micro-order.datasource.js.map