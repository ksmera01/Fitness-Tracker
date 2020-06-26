//API Routes

const mongoose = require("mongoose");
const exerciseModel = require("../models/exerciseModel.js");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: {
        type: String,
    },
    //Need to figure out syntax for exercises from other model
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;