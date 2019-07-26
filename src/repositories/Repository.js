import axios from "axios";

const baseDomain = "http://betting.test";
const baseURL = `${baseDomain}/api/V1`;

export default axios.create({
    baseURL,
    headers: {"Content-Type": "application/json"}
});
