function find42(a, b) {
    if (a + b == 42){
        return true;
    }if (a == 42){
        return true;
    }if (b == 42){
        return true;
    }if (a - b == 42){
        return true;
    }if (b - a == 42){
        return true;
    }else{
        return false;
    }
}   
    //Code the function body below.


//This is just for you to see what happens when the function is called
console.log(find42(62, 20));