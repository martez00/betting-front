import Repository from "./Repository";

const singularResource = "/user";
const pluralResource = "/users";
export default {
    get(params) {
        return Repository.get(`${pluralResource}${params}`);
    }
};
