"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let OrdersController = class OrdersController {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async create(order) {
        return this.orderRepository.create(order);
    }
    async count(where) {
        return this.orderRepository.count(where);
    }
    async find(filter) {
        return this.orderRepository.find(filter);
    }
    async updateAll(order, where) {
        return this.orderRepository.updateAll(order, where);
    }
    async findById(id, filter) {
        return this.orderRepository.findById(id, filter);
    }
    async updateById(id, order) {
        await this.orderRepository.updateById(id, order);
    }
    async replaceById(id, order) {
        await this.orderRepository.replaceById(id, order);
    }
    async deleteById(id) {
        await this.orderRepository.deleteById(id);
    }
};
exports.OrdersController = OrdersController;
tslib_1.__decorate([
    (0, rest_1.post)('/orders'),
    (0, rest_1.response)(200, {
        description: 'Order model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Order) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Order, {
                    title: 'NewOrder',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/orders/count'),
    (0, rest_1.response)(200, {
        description: 'Order model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Order)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/orders'),
    (0, rest_1.response)(200, {
        description: 'Array of Order model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Order, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Order)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/orders'),
    (0, rest_1.response)(200, {
        description: 'Order PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Order, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Order)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Order, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/orders/{id}'),
    (0, rest_1.response)(200, {
        description: 'Order model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Order, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Order, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/orders/{id}'),
    (0, rest_1.response)(204, {
        description: 'Order PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Order, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Order]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/orders/{id}'),
    (0, rest_1.response)(204, {
        description: 'Order PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Order]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/orders/{id}'),
    (0, rest_1.response)(204, {
        description: 'Order DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersController.prototype, "deleteById", null);
exports.OrdersController = OrdersController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.OrderRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.OrderRepository])
], OrdersController);
//# sourceMappingURL=orders.controller.js.map