var express = require("express");
var app = express();

var friendsTable = require("../app/data/friends")

module.exports = function(app) {

app.get("/api/friends", function(req, res) {
    res.json(friendsTable);
    });

app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    console.log(newFriend);
    friends.push(newFriend);
    res.json(newFriend);
    });
};