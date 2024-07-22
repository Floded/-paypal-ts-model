import cors from "cors";
import express from "express";
import morgan from "morgan";
import path from "path";
import { envs } from "./config/plugins/env.plugins";
import { paymentRouter } from "./router/payment.router";
import { server } from "./server/server";

const port = envs.PORT;

server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

server.use(paymentRouter);

server.use(express.static(path.resolve("src/public")));

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
