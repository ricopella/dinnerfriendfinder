const path = require("path");
const bodyParser = require("body-parser");
let friendList = require("../data/friends");
const express = require('express');

module.exports = app => {

    app.post("/api/addFriend", function(req, res) {
        // push submitted form to friendList
        console.log(friendList);
        friendList.push(req.body);
        res.json(true);
    });

    app.get("/api/friends/:user_id?", function(req, res) {
        res.json(friendList)
    });


}