const credentials = require("./credentials.js");

module.exports = {
    HOST: credentials.HOST,
    USER: credentials.USER,
    PASSWORD: credentials.PASSWORD,
    DB: credentials.DB,
    dialect: credentials.dialect,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
