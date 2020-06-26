//API Routes

const router = require("express").Router();
const workoutModel = require("../models/workoutModel.js");

//Find Workouts
router.get("/api/workouts/range", (req, res) => {
    workoutModel.find()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//Create new workout
router.get("/api/workouts", (req, res) => {
    workoutModel.create({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;