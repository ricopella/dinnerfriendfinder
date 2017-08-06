 console.log("yup!");
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
         //  console.log(newFriend);

     $.post("/api/addFriend", newFriend, function(data) {
         //  console.log("this data");
         //  console.log(data);



     }).then(function(newFriend) {
         console.log("reached me");
         console.log(newFriend);
         $.get("/api/friends", function(data) {
             console.log("data");
             console.log(data);
             let winnerTotal = 0;
             let bestMatch = 0;
             let bestMatchObj;
             let matchFound = false;
             let friendsLength = data.length;

             console.log("this: " + data[0].scores[0]);

             //  loop through friends
             for (let i = 0; i < data.length - 1; i++) {

                 let difference = 0;

                 // loop through questions
                 for (let j = 0; j <= 10; j++) {

                     difference += Math.abs(data[friendsLength - 1].scores[j] - data[i].scores[j]);
                 }

                 // if match not found (1st round)
                 if (!matchFound) {
                     //  set difference to highest score
                     bestMatch = difference
                         //  set match object for recall
                     bestMatchObj = data[i];

                     matchFound = true;

                     //  if match has been found
                 } else {
                     //  if previous best matchFound is greater than difference
                     if (bestMatch > difference) {

                         // reset best match
                         bestMatch = difference;

                         // reset match object
                         bestMatchObj = data[i];
                     }
                 }

                 // best match result data to modal 
                 $("#matchName").text(bestMatchObj.name);
                 $("#matchPhoto").attr("src", bestMatchObj.photo);
                 $("#bestMatch").modal('show');
             }
         })
     })

 });