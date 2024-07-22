import { Router } from "express";
import {
  cancelController,
  createOrderController,
  paymentController,
} from "../controller/payment.controller";

export const paymentRouter = Router();

paymentRouter.post("/create-order", paymentController);
paymentRouter.get("/capture-order", createOrderController);
paymentRouter.get("/cancel-order", cancelController);
