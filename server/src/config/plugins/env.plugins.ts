import "dotenv/config";
import * as env from "env-var";

// configuramos las variables de entorno para que su tipado sea mas sencillo

export const envs = {
  PORT: env.get("PORT").required().asPortNumber(),
  PAYPAL_API_SECRET_KEY: env.get("PAYPAL_API_SECRET_KEY").required().asString(),
  PAYPAL_CLIENT_ID: env.get("PAYPAL_CLIENT_ID").required().asString(),
  PAYPAL_API: env.get("PAYPAL_API").required().asString(),
  PAYPAL_WEBHOOK_ID: env.get("PAYPAL_WEBHOOK_ID").required().asString(),
};
