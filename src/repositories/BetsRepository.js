import Repository from "./Repository";

const singularResource = "/bet";
const pluralResource = "/bets";
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
