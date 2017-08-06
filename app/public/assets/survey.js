$("#submit-survey").on("click", function(event) {
    event.preventDefault();
    let scores = [
        $("#question1").val(), $("#question2").val(), $("#question3").val(), $("#question4").val(), $("#question5").val(), $("#question6").val(), $("#question7").val(), $("#question8").val(), $("#question9").val(), $("#question10").val()
    ].map(function(score) {
        let stripped = score.replace(/[^\d]/g, '');
        return parseInt(stripped);
    });
    //  debugger;
    let newFriend = {
        name: $("#PUT-name").val().trim(),
        photo: $("#PUT-photo").val().trim(),
        scores: scores
    }

    $.post("/api/addFriend", newFriend, function(data) {
        return true;
    }).then(function() {

        $.get("/api/friends", function(data) {
            console.log("data");
            console.log(data);
            let bestMatch = 0;
            let bestMatchObj;
            let matchFound = false;
            let friendsLength = data.length;

            //  loop through friends
            for (let i = 0; i < data.length - 1; i++) {

                let difference = 0;

                // loop through questions
                for (let j = 0; j < 10; j++) {
                    // input user array subtract absolute value to 
                    difference += Math.abs(data[friendsLength - 1].scores[j] - data[i].scores[j]);
                    console.log("yo:" + newFriend.scores[j] + " " + data[i].scores[j]);
                    console.log(difference);
                }

                // if match not found (1st round)
                if (!matchFound) {
                    //  set difference to highest score
                    bestMatch = difference;
                    //  set match object for recall
                    bestMatchObj = data[i];

                    matchFound = true;
                    console.log(bestMatchObj);

                    //  if match has been found
                } else {
                    //  if previous best matchFound is greater than difference
                    if (difference < bestMatch) {

                        // reset best match
                        bestMatch = difference;

                        // reset match object
                        bestMatchObj = data[i];

                    } else {
                        // difference is greater than previous bestMatch, winner!
                        break;
                    }
                }
            }
            console.log(bestMatchObj);
            // best match result data to modal 
            $("#bestMatch").modal('show');
            $("#matchName").text(bestMatchObj.name);
            $("#matchPhoto").attr("src", bestMatchObj.photo);

        })
    })

});