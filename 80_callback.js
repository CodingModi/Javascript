// callback function

function greet(name){
    console.log("hello"+""+name);
}
function processuser(callback){
callback("world");
}
processuser(greet);
