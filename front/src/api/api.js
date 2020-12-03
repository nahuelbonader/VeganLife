import axios from "axios";
import { IP } from "../../env";

const API = axios.create({
  baseURL: `http://${IP}:1337/api`,
});

export default API;
