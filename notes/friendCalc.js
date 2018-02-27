require("friendsTable")

// array to store the diffs of all users. As iterate we will push the diffs value into this array for later work
scoreDiffs = [];

// for loop to go through all old friends, skipping the last entry which is "new friend"
for (var i = 0, (i < ((friends.length)-1)), i++) {
    // newly entered user
    var newFriendId = friends[friends[length-1];
    // variable to loop through ALL friends
    var currentFriendId = friends[i];
    // newfriend scores array
    var newFriendScores = newFriendId.scores;
    // first current friend scores array
    var currentFriendScores = currentFriendId.scores;
    // set the current diff at o before each score loop
    var currentDiff = 0
    // loop to go through each score to calc the diff
    for (var j = 0; j < scores.length; j++) {
        currentDiff = currentDiff + (abs(newFriendScores[j] - currentFriendScores[j]));        
        scoreDiffs.push(currentDiff);
    };
};