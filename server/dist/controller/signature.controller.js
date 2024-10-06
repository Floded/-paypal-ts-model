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
exports.webhookSignature = void 0;
const axios_1 = __importDefault(require("axios"));
const env_plugins_1 = require("../config/plugins/env.plugins");
const getAccessToken_1 = require("../helpers/getAccessToken");
const webhookSignature = (body, headers) => __awaiter(void 0, void 0, void 0, function* () {
    const accessToken = yield (0, getAccessToken_1.getAccesToken)();
    const verificationData = {
        auth_algo: headers["paypal-auth-algo"],
        cert_url: headers["paypal-cert-url"],
        transmission_id: headers["paypal-transmission-id"],
        transmission_sig: headers["paypal-transmission-sig"],
        transmission_time: headers["paypal-transmission-time"],
        webhook_id: `${env_plugins_1.envs.PAYPAL_WEBHOOK_ID}`,
        webhook_event: body,
    };
    const response = yield (0, axios_1.default)({
        url: `${env_plugins_1.envs.PAYPAL_API}/v1/notifications/verify-webhook-signature`,
        method: "post",
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
        data: verificationData,
    });
    const { data: { verification_status }, } = response;
    return verification_status;
});
exports.webhookSignature = webhookSignature;
//# sourceMappingURL=signature.controller.js.map