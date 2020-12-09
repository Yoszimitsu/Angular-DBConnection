module.exports = (sequelize, Sequelize) => {
    const Uid = sequelize.define("uid", {
        uid: {
            type: Sequelize.STRING
        },
        counter: {
            type: Sequelize.INTEGER
        }
    });

    return Uid;
};
