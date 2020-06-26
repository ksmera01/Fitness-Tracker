const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    type: {
        type: String,
    },
    name: {
        type: String,
    },
    duration: {
        type: String,
    },
    weight: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    sets: {
        type: Number,
    }
});

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [exerciseSchema]
    //Deleted exercise model and added schema to workout model
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;