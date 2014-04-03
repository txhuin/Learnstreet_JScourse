#Capitalize the First Letter
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase()+ str.substring(1, str.length)
}

//This is just for you to see what happens when the function is called
console.log(capitalizeFirst("javaScript"));