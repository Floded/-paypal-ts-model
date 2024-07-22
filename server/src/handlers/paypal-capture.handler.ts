import axios from "axios";
import { envs } from "../config/plugins/env.plugins";

export const captureOrderHandler = async (token: any) => {
  const response = await axios.post(
    `${envs.PAYPAL_API}/v2/checkout/orders/${token}/capture`,
    {},
    {
      auth: {
        username: envs.PAYPAL_CLIENT_ID,
        password: envs.PAYPAL_API_SECRET_KEY,
      },
    }
  );
  console.log(response.data);

  return response.data;
};
