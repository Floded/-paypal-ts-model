"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const env_plugins_1 = require("./config/plugins/env.plugins");
const payment_router_1 = require("./router/payment.router");
const server_1 = require("./server/server");
const port = env_plugins_1.envs.PORT;
server_1.server.use((0, cors_1.default)());
server_1.server.use((0, morgan_1.default)("dev"));
server_1.server.use(express_1.default.json());
server_1.server.use(payment_router_1.paymentRouter);
server_1.server.use(express_1.default.static(path_1.default.resolve("src/public")));
server_1.server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
//# sourceMappingURL=app.js.map