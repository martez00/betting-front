import Repository from "./Repository";

const singularResource = "/statistic";
export default {
    get(params) {
        return Repository.get(`${singularResource}${params}`);
    }
};
