import { Request, Response } from "express";
import { paypalRequest } from "../handlers/paypal-request.handler";
import { webhookResponse } from "./webhook.controller";

export const paymentController = async (req: Request, res: Response) => {
  const { price, currency } = req.body;

  try {
    const response = await paypalRequest(price, currency);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error });
  }
};

export const notificationsWebhook = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const { headers } = req;
    const response = await webhookResponse(body, headers);

    res.status(200).json({ msj: response });
  } catch (error) {
    console.log("Error en el webhook", error);
    res.status(500).json(error);
  }
};

export const cancelController = (req: Request, res: Response) => {
  res.send("cancel order");
};
