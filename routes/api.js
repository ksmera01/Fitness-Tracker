const router = require("express").Router();
const Workout = require("../models/workout.js");

//New workout
router.post("/api/workouts", (req, res) => {
    Workout.create(req.body)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//Put to already existing one
router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
        req.params.id, { $push: { exercises: req.body } })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//Find All
router.get("/api/workouts/range", (req, res) => {
    Workout.find()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.send(err);
        });
});

//Last Workout
router.get("/api/workouts", (req, res) => {
    Workout.find()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.send(err);
        });
});

module.exports = router;