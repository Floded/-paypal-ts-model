import axios from "axios";
import { envs } from "../config/plugins/env.plugins";

export const getAccesToken = async () => {
  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");

  const { data } = await axios.post(
    `${envs.PAYPAL_API}/v1/oauth2/token`,
    params,
    {
      auth: {
        username: envs.PAYPAL_CLIENT_ID,
        password: envs.PAYPAL_API_SECRET_KEY,
      },
    }
  );
  const { access_token } = data;

  return access_token;
};
