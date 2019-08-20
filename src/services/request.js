import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:9999"
});

export default request;
