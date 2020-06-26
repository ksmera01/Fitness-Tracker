const workoutModel = require("../models/workoutModel.js");

module.exports = function (app) {
    app.post("/api/workouts", (req, res) => {
        workoutModel.create({})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });
}