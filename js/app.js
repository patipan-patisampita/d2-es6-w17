//Outer Function
//1.Regulation function
//2.expression function
//3.Anonymous expression function
const myHello = function (name = null, age = null){
    //inner function
    function displayName(){
        console.log(`Hi ${name} ${age}`);
    }
    //Calling inner function
    //displayName();
    //return a function
    return displayName();
    
}

myHello("Mark", 25);
