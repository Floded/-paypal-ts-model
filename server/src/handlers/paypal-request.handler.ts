import axios from "axios";
import { envs } from "../config/plugins/env.plugins";
import { getAccesToken } from "../helpers/getAccessToken";

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
    },
  };
  // console.log(order.purchase_units[0]);

  const accessToken = await getAccesToken();

  const {
    data: { links },
  } = await axios.post(`${envs.PAYPAL_API}/v2/checkout/orders`, order, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const linkResponse = links[1].href;

  return linkResponse;
};
