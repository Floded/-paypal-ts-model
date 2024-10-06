"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentRouter = void 0;
const express_1 = require("express");
const payment_controller_1 = require("../controller/payment.controller");
exports.paymentRouter = (0, express_1.Router)();
exports.paymentRouter.post("/create-order", payment_controller_1.paymentController);
exports.paymentRouter.get("/webhook", payment_controller_1.notificationsWebhook);
exports.paymentRouter.get("/cancel-order", payment_controller_1.cancelController);
//# sourceMappingURL=payment.router.js.map