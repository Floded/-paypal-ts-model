import { Router } from "express";
import {
  cancelController,
  notificationsWebhook,
  paymentController,
} from "../controller/payment.controller";

export const paymentRouter = Router();

paymentRouter.post("/create-order", paymentController);
paymentRouter.get("/webhook", notificationsWebhook);
paymentRouter.get("/cancel-order", cancelController);
