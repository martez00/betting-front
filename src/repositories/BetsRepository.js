import Repository from "./Repository";

const singularResource = "/bet";
const pluralResource = "/bets";
export default {
    get() {
        return Repository.get(`${pluralResource}`);
    },

    getBet(postId) {
        return Repository.get(`${singularResource}/${postId}`);
    },

    createBet(payload) {
        return Repository.post(`${singularResource}`, payload);
    }
};
