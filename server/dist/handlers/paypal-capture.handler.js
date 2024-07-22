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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.captureOrderHandler = void 0;
const axios_1 = __importDefault(require("axios"));
const env_plugins_1 = require("../config/plugins/env.plugins");
const captureOrderHandler = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.post(`${env_plugins_1.envs.PAYPAL_API}/v2/checkout/orders/${token}/capture`, {}, {
        auth: {
            username: env_plugins_1.envs.PAYPAL_CLIENT_ID,
            password: env_plugins_1.envs.PAYPAL_API_SECRET_KEY,
        },
    });
    console.log(response.data);
    return response.data;
});
exports.captureOrderHandler = captureOrderHandler;
//# sourceMappingURL=paypal-capture.handler.js.map