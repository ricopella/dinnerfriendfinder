console.log("yup!");
$("#submit-survey").on("click", function(event) {
    event.preventDefault();
    let newFriend = {
            name: $("#PUT-name").val().trim(),
            photo: $("#PUT-photo").val().trim(),
            scores: [
                $("#question1").val().slice(0, 1), $("#question2").val().slice(0, 1), $("#question3").val().slice(0, 1), $("#question4").val().slice(0, 1), $("#question5").val().slice(0, 1), $("#question6").val().slice(0, 1), $("#question7").val().slice(0, 1), $("#question8").val().slice(0, 1), $("#question9").val().slice(0, 1), $("#question10").val().slice(0, 1),
            ]
        }
        // console.log(newFriend);

    $.post("/api/friends", newFriend, function(data) {
        if (data) {
            alert("Form submitted, See who you match with.")
        }
    })

});