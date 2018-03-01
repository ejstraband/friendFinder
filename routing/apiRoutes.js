var express = require("express");
var app = express();

var friends = require("../app/data/friends")

module.exports = function(app) {

app.get("/api/friends", function(req, res) {
    res.json(friends);
    });

app.post("/api/newFriend", function(req, res) {
    var newFriend = req.body;
    // newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
    console.log(newFriend);
    friends.push(newFriend);
    res.json(newFriend);
    });
};