function authenticate(password) {
 
    var successMessage = "you are now logged in!";
    var failureMessage = "oops. try again.";
       if (password == "jsrocks") {
       return successMessage
       }else {
        return failureMessage}
       }//Complete the rest of the function body to check if the password is "jsrocks".


//This is just for you to see what happens when the function is called
console.log(authenticate("jsrocks"));