import Repository from "./Repository";

const pluralResource = "/admin/sports";
export default {
    get(params = '') {
        return Repository.get(`${pluralResource}${params}`);
    },

    getSport(postId) {
        return Repository.get(`${pluralResource}/${postId}`);
    },

    storeSport(payload) {
        return Repository.post(`${pluralResource}`, payload);
    }
};
