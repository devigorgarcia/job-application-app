import axios from "axios";

export const api = axios.create({
  baseURL: "https://application-api-production.up.railway.app",
});
