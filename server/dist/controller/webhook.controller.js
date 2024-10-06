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
exports.webhookResponse = void 0;
const signature_controller_1 = require("./signature.controller");
const webhookResponse = (body, headers) => __awaiter(void 0, void 0, void 0, function* () {
    const verificationStatus = yield (0, signature_controller_1.webhookSignature)(body, headers);
    if (verificationStatus === "SUCCESS") {
        const event = body.event_type;
        switch (event) {
            case "PAYMENT.CAPTURE.COMPLETED":
                console.log(body);
                return "data recibida";
            default:
                console.log("No funciono el webhook");
        }
    }
    else {
        return "verificationStatus invalido";
    }
});
exports.webhookResponse = webhookResponse;
//# sourceMappingURL=webhook.controller.js.map