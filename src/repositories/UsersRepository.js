import Repository from "./Repository";

const singularResource = "/user";
const pluralResource = "/users";
export default {
    get(params) {
        return Repository.get(`${pluralResource}${params}`);
    },

    getBet(postId) {
        return Repository.get(`${singularResource}/${postId}`);
    },

    createBet(payload) {
        return Repository.post(`${singularResource}`, payload);
    }
};
