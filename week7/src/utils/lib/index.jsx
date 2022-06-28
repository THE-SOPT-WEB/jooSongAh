import axios from "axios";

export const reqAPI = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  headers: {
    "Content-type": "application/json",
  },
});
