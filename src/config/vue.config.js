const prod = process.env.NODE_ENV === "production";

module.exports = {
    apiURL: prod ? "http://seb-betting-api.herokuapp.com/public/api/V1" : "http://betting.test/api/V1",
}