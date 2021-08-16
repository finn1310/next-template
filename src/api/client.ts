/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "./Interceptors";
import { clientStorage } from "constant/clientStorage";

/**
 * Use setToken if necessary
 * @param token
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const setToken = async (token = "") => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const clearToken = async () => {
  axios.defaults.headers.common["Authorization"] = "";
};

const requestAbortCode = "ECONNABORTED";

axios.defaults.baseURL = process.env.REACT_APP_API_GATEWAY;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.timeout = 360000;

const RequestClient = class {
  constructor() {
    const access_token = clientStorage.get("at");
    if (access_token) {
      this.init(access_token);
    } else {
      this.init("");
    }
  }

  async init(access_token: string) {
    axios.defaults.headers.common["Authorization"] = access_token;
  }

  async headers(params: { [x: string]: unknown }) {
    const keys = Object.keys(params);

    keys.forEach((key) => {
      axios.defaults.headers.common[key] = params[key];
    });
  }

  async get(endpoint: string, params = {}) {
    try {
      const response = await axios.get(endpoint, params);

      return response;
    } catch (error) {
      this.handleError(error);
    }
  }

  async post(endpoint: string, body: {}, params = {}) {
    try {
      const response = await axios.post(endpoint, body, params);

      return response;
    } catch (error) {
      this.handleError(error);
      return error.response;
    }
  }

  async put(endpoint: string, body: {}, params = {}) {
    try {
      const response = await axios.put(endpoint, body, params);
      return response;
    } catch (error) {
      this.handleError(error);
    }
  }

  async delete(endpoint: string, data?: {}) {
    try {
      const response = await axios.delete(endpoint, { data: data });
      return response;
    } catch (error) {
      this.handleError(error);
    }
  }
  async upload(endpoint: string, file: any) {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await axios.post(endpoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response;
    } catch (error) {
      this.handleError(error);
    }
  }
  handleError(error: any) {
    if (error.response && error.response.status === 401) {
      // Handle logout/refresh token here...
    }
    if (
      error.code === requestAbortCode ||
      ("response" in error && error.response === undefined)
    ) {
      // delay(1000);
      error.recall = true;
    }
    // throw error;
  }
};

const client = new RequestClient();

export { client };
