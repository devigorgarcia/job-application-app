import axios from "axios";

export const api = axios.create({
  baseURL: "https://job-app-api.onrender.com",
});
