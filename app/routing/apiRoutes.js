const path = require("path");
const bodyParser = require("body-parser");
let friendList = require("../data/friends");
const express = require('express');

module.exports = app => {

    app.post("/api/addFriend", function(req, res) {

        // bug repair - convert all scores to integers
        var newScores = req.body.scores.map(function(score) {
            return parseInt(score);
        });

        req.body.scores = newScores;

        // push submitted form to friendList
        friendList.push(req.body);
        res.json(true);
    });

    app.get("/api/friends/:user_id?", function(req, res) {
        res.json(friendList)
    });
}