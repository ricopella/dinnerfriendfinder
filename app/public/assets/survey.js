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

         // best match result data to modal 
         $("#matchName").text(data.name);
         $("#matchPhoto").attr("src", data.photo);
         $("#bestMatch").modal('toggle');

     }).then(function(newFriend) {
         console.log("reached me");
         console.log(newFriend);
         $.get("/api/friends", function(data) {
             console.log("data");
             console.log(data);

             //  loop through friends
             for (let i = 0; i < data.length - 1; i++) {

                 // loop through questions
                 for (let j = 0; j <= 10; j++) {

                 }

             }
         })
     })

 });