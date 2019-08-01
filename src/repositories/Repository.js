import axios from "axios";
import { apiURL } from "../config/vue.config";

const baseURL = apiURL;

export default axios.create({
    baseURL,
    headers: {"Content-Type": "application/json"}
});
