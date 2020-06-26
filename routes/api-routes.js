//API Routes

const router = require("express").Router();
const models = require("../models");

//Find Workouts
router.get("/api/workouts/range", (req, res) => {
    models.Workout.find()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.send(err);
        });
});

//Create new workout
router.post("/api/workouts", (req, res) => {
    models.Workout.create({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;