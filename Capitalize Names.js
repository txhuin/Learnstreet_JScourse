#Capitalize Names

#You're building a website and you want to store everyone's names with correct capitalization. People use all sorts of capitalizations when they enter their first and last name, like "jOhn SMIth", "anne doe", and "david Shi", for example. You want to store names so that only the first letter of the first name and first letter of the last name are capitalized, like "Amy Sue". 

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.substring(1, str.length);
}

function capitalizeName(name){
    //The string below contains a lower case version of name. Let's use this from now on.
    var lowerName = name.toLowerCase();
    
    var spaceIndex = lowerName.indexOf(' ');
    var first = lowerName.substring(0, spaceIndex);
    var second = lowerName.substring(spaceIndex + 1, name.length)
    
    return first.charAt(0).toUpperCase() + first.substring(1, first.length) + ' ' + 
    second.charAt(0).toUpperCase() + second.substring(1, second.length)
    //Complete the function body below.
    
}

//This is just for you to see what happens when the function is called
console.log(capitalizeName("steve jobs"));