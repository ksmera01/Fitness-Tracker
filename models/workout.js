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
        type: Number,
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

workoutSchema.methods.addExercise = function () {
    //Returning array of exercise and reducing it by sum of duration
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
}

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;