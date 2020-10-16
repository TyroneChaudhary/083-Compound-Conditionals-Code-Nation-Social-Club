// set the correct username and password combination below
var correctUsername = "Sha'Nay";
var correctPassword = "My.Weave";


$("button").click(function() {
    var username = $(".username").val();
    var password = $(".password").val();

    // WRITE YOUR COMPOUND CONDITIONAL BELOW THIS LINE
     if(username === correctUsername && password === correctPassword) {
          $(".message").append
                ("You're in");
     }

});