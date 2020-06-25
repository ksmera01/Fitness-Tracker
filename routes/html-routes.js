//HTML Routes

const path = require("path");
let app = require("express");

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname + "../public/index.html"));
    });

    app.get("/exercise", function (req, res) {
        res.sendFile(path.join(__dirname + "../public/exercise.html"));
    });

    app.get("/stats", function (req, res) {
        res.sendFile(path.join(__dirname + "../public/stats.html"));
    });
}