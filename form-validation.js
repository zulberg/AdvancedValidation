function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  var strlen = userEntered.length;
  if (strlen < 6) {
    document.getElementById("usernameError").innerHTML="Username must be at least 6 characters.";
    document.getElementById("usernameGroup").classList.add("has-error");
  } else {
    document.getElementById("usernameGroup").classList.add("has-success");
    }
  //Show message that there is an error with the username...
  document.getElementById("usernameError").innerHTML="Bad username.";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
    //Show message that there is an error with the password...
  if (passEntered == "password") {
    document.getElementById("passwordError").innerHTML="You cannot choose that.  Try another password.";
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
    } else {
        //Turn password items green
    document.getElementById("passwordGroup").classList.add("has-success");
    }

  document.getElementById("passwordError").innerHTML="Bad password.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");

}
