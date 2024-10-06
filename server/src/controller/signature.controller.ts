import axios from "axios";
import { envs } from "../config/plugins/env.plugins";
import { getAccesToken } from "../helpers/getAccessToken";

export const webhookSignature = async (body: any, headers: any) => {
  const accessToken = await getAccesToken();
  const verificationData = {
    auth_algo: headers["paypal-auth-algo"],
    cert_url: headers["paypal-cert-url"],
    transmission_id: headers["paypal-transmission-id"],
    transmission_sig: headers["paypal-transmission-sig"],
    transmission_time: headers["paypal-transmission-time"],
    webhook_id: `${envs.PAYPAL_WEBHOOK_ID}`,
    webhook_event: body,
  };

  const response = await axios({
    url: `${envs.PAYPAL_API}/v1/notifications/verify-webhook-signature`,
    method: "post",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    data: verificationData,
  });

  const {
    data: { verification_status },
  } = response;

  return verification_status;
};
