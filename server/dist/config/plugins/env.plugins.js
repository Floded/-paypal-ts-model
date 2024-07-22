"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.envs = void 0;
require("dotenv/config");
const env = __importStar(require("env-var"));
// configuramos las variables de entorno para que su tipado sea mas sencillo
exports.envs = {
    PORT: env.get("PORT").required().asPortNumber(),
    PAYPAL_API_SECRET_KEY: env.get("PAYPAL_API_SECRET_KEY").required().asString(),
    PAYPAL_CLIENT_ID: env.get("PAYPAL_CLIENT_ID").required().asString(),
    PAYPAL_API: env.get("PAYPAL_API").required().asString(),
};
//# sourceMappingURL=env.plugins.js.map