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
exports.paypalRequest = void 0;
const axios_1 = __importDefault(require("axios"));
const env_plugins_1 = require("../config/plugins/env.plugins");
const paypalRequest = (price, currency) => __awaiter(void 0, void 0, void 0, function* () {
    const order = {
        intent: "CAPTURE",
        purchase_units: [
            {
                amount: {
                    currency_code: currency,
                    value: price,
                },
            },
        ],
        application_context: {
            brand_name: "Mi tienda",
            landing_page: "NO_PREFERENCE",
            user_action: "PAY_NOW",
            return_url: `http://localhost:${env_plugins_1.envs.PORT}/capture-order`,
            cancel_url: `http://localhost:${env_plugins_1.envs.PORT}/cancel-order`,
        },
    };
    console.log(order.purchase_units[0]);
    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");
    const { data: { access_token }, } = yield axios_1.default.post(`${env_plugins_1.envs.PAYPAL_API}/v1/oauth2/token`, params, {
        auth: {
            username: env_plugins_1.envs.PAYPAL_CLIENT_ID,
            password: env_plugins_1.envs.PAYPAL_API_SECRET_KEY,
        },
    });
    const { data: { links }, } = yield axios_1.default.post(`${env_plugins_1.envs.PAYPAL_API}/v2/checkout/orders`, order, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
    const linkResponse = links[1].href;
    return linkResponse;
});
exports.paypalRequest = paypalRequest;
//# sourceMappingURL=paypal.handler.js.map