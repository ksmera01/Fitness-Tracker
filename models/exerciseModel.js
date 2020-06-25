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
        type: String,
    },
    reps: {
        type: String,
    },
    sets: {
        type: String,
    }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;