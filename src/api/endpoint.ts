const BASE_URL = "https://localhost:3000";
const API_URL = BASE_URL + "/api";

export const Endpoint = {
  SIGNIN: `${API_URL}/signin`,
  SIGNUP: `${API_URL}/signup`,
  FORGOT: `${API_URL}/forgot`,
  REFRESH_TOKEN: `${API_URL}/refresh-token`,
};
