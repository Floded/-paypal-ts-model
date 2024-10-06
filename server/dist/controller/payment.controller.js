"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelController = exports.notificationsWebhook = exports.paymentController = void 0;
const paypal_request_handler_1 = require("../handlers/paypal-request.handler");
const webhook_controller_1 = require("./webhook.controller");
const paymentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { price, currency } = req.body;
    try {
        const response = yield (0, paypal_request_handler_1.paypalRequest)(price, currency);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(404).json({ error });
    }
});
exports.paymentController = paymentController;
const notificationsWebhook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const { headers } = req;
        const response = yield (0, webhook_controller_1.webhookResponse)(body, headers);
        res.status(200).json({ msj: response });
    }
    catch (error) {
        console.log("Error en el webhook", error);
        res.status(500).json(error);
    }
});
exports.notificationsWebhook = notificationsWebhook;
const cancelController = (req, res) => {
    res.send("cancel order");
};
exports.cancelController = cancelController;
//# sourceMappingURL=payment.controller.js.map