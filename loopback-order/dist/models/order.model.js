"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Order = class Order extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Order = Order;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Order.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Order.prototype, "bookId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Order.prototype, "bookTitle", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Order.prototype, "customerName", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        default: 1,
    }),
    tslib_1.__metadata("design:type", Number)
], Order.prototype, "quantity", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        default: 'PENDING',
    }),
    tslib_1.__metadata("design:type", String)
], Order.prototype, "status", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        default: () => new Date(),
    }),
    tslib_1.__metadata("design:type", String)
], Order.prototype, "createdAt", void 0);
exports.Order = Order = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Order);
//# sourceMappingURL=order.model.js.map