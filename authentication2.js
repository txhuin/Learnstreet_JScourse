function authChuckNorris(username, password) {
    var successMessage = "welcome chuck norris!";
    var failureMessage = "sorry, try again.";
    if (username == "chuck"){
        if (password == "norris"){
            return successMessage;
        }else{
            return failureMessage;
        }
    }else{
        return failureMessage;
    }
}

console.log(authChuckNorris("chuck", "norris"));