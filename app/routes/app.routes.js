module.exports = app => {
    const apps = require("../controllers/app.controller.js");

    const router = require("express").Router();

    router.post("/:uid", apps.create);
    router.get("/", apps.findAll);
    router.get("/:uid", apps.findOne);
    router.put("/:uid", apps.update);
    router.delete("/:uid", apps.delete);
    router.delete("/", apps.deleteAll);

    app.use('/api', router);
};
