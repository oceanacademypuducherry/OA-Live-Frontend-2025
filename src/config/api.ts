import axios from "axios";

export const BASE_URL = axios.create({
  // baseURL: "http://127.0.0.1:2001/oceanlivereact/asia-south1/oa_live_test_api/",
  baseURL:"https://oa-live-api-y5x6yhhkmq-el.a.run.app/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
