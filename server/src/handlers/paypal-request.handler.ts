import axios from "axios";
import { envs } from "../config/plugins/env.plugins";

export const paypalRequest = async (price: string, currency: string) => {
  const order = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: currency,
          value: price,
        },
      },
    ],
    application_context: {
      brand_name: "Mi tienda",
      landing_page: "NO_PREFERENCE",
      user_action: "PAY_NOW",
      return_url: `http://localhost:${envs.PORT}/capture-order`,
      cancel_url: `http://localhost:${envs.PORT}/cancel-order`,
    },
  };
  console.log(order.purchase_units[0]);

  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");

  const {
    data: { access_token },
  } = await axios.post(`${envs.PAYPAL_API}/v1/oauth2/token`, params, {
    auth: {
      username: envs.PAYPAL_CLIENT_ID,
      password: envs.PAYPAL_API_SECRET_KEY,
    },
  });

  const {
    data: { links },
  } = await axios.post(`${envs.PAYPAL_API}/v2/checkout/orders`, order, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const linkResponse = links[1].href;

  return linkResponse;
};
