//Closures Function
const greet = ()=>{
    let name ="Jhon"; //outside the inner function

    //Inner function
    const displayName =()=>{
        console.log("Hi: " + name);
    }
    //calling inner function
    return displayName();
}
greet();
