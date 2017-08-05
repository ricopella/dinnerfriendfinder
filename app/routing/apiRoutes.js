const path = require("path");
const bodyParser = require("body-parser");
let friendList = require("../data/friends");

module.exports = app => {
    app.get("/api/friends", function(req, res) {
        res.json(friendList)
    });

    app.post("/api/friends", function(req, res) {
        console.log(req.body);
        let newFriend = req.body;
        friendList.push(newFriend);
        // res.json(true);
    });
}