const db = require("../models");
const App = db.app;

// Create and Save a new Uid
exports.create = (req, res) => {
// Validate request
    if (!req.body.uid) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a new Uid
    const uid = {
        uid: req.body.uid,
        counter: req.body.counter
    };

    // Save Uid in the database
    App.create(uid)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Uid."
            });
        });
};

// Retrieve all Uids from the database.
exports.findAll = (req, res) => {
    App.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Uids."
            });
        });
};

// Find a single Uid with an id
exports.findOne = (req, res) => {
    const uid = req.params.uid;
    App.findByPk(uid)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Uid with id=" + uid
            });
        });
};

// Update a Uid by the id in the request
exports.update = (req, res) => {
    const uid = req.params.uid;

    App.update(req.body, {
        where: {uid: uid}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Uid was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Uid with id=${uid}. Maybe Uid was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Uid with id=" + uid
            });
        });
};

// Delete a Uid with the specified id in the request
exports.delete = (req, res) => {
    const uid = req.params.uid;

    App.destroy({
        where: {uid: uid}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Uid was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Uid with id=${uid}. Maybe Uid was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Uid with id=" + uid
            });
        });
};

// Delete all Uid from the database.
exports.deleteAll = (req, res) => {
    App.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({message: `${nums} Uids were deleted successfully!`});
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Uids."
            });
        });
};

