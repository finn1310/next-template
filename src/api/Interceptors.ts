import { setToken, clearToken } from "api/client";
import { Endpoint } from "api";
import { clientStorage } from "constant/clientStorage";
import axios from "axios";

axios.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401) {
      const refreshToken = clientStorage.get("rt");

      if (refreshToken) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${refreshToken}`;

        const res = await axios.post(`${Endpoint.REFRESH_TOKEN}`, {
          oldToken: clientStorage.get("at"),
        });
        if (res.status === 200) {
          clientStorage.set("at", res.data.accessToken);
          clientStorage.set("rt", res.data.refreshToken);

          setToken(res.data.accessToken);

          originalRequest.headers[
            "Authorization"
          ] = `Bearer ${res.data.accessToken}`;
          return axios(originalRequest);
        }
      } else {
        handleError();
      }
    } else if (error.response && error.response.status === 403) {
      handleError();
    }
    return Promise.reject(error);
  },
);

const handleError = () => {
  clientStorage.remove("at");
  clientStorage.remove("rt");
  sessionStorage.clear();
  clearToken();
  // handle sign out
};

export default axios;
