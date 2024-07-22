import { Request, Response } from "express";
import { captureOrderHandler } from "../handlers/paypal-capture.handler";
import { paypalRequest } from "../handlers/paypal-request.handler";

export const paymentController = async (req: Request, res: Response) => {
  const { price, currency } = req.body;

  try {
    const response = await paypalRequest(price, currency);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error });
  }
};

export const createOrderController = async (req: Request, res: Response) => {
  const { token } = req.query;

  try {
    const response = await captureOrderHandler(token);
    res.send("payed");
  } catch (error) {
    res.status(404).json({ error });
  }
};

export const cancelController = (req: Request, res: Response) => {
  res.send("cancel order");
};
