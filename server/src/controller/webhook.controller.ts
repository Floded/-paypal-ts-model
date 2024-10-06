import { webhookSignature } from "./signature.controller";

export const webhookResponse = async (body: any, headers: any) => {
  const verificationStatus = await webhookSignature(body, headers);

  if (verificationStatus === "SUCCESS") {
    const event = body.event_type;

    switch (event) {
      case "PAYMENT.CAPTURE.COMPLETED":
        console.log(body);
        return "data recibida";
      default:
        console.log("No funciono el webhook");
    }
  } else {
    return "verificationStatus invalido";
  }
};
