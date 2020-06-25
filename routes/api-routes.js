const db = require("./models");

module.exports = function (app) {
    app.post("/api/workouts", ({ body }, res) => {
        db.Workout.create(body)
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });
}