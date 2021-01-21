module.exports = (sequelize, Sequelize) => {
    const Uid = sequelize.define("uid", {
        uid: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        counter: {
            type: Sequelize.INTEGER
        }
    });

    return Uid;
};
