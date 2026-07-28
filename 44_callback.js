
// callback function

function greet(name){
    console.log("hello"+""+name);
}
function processuser(callback){
callback("vishwakanya");
}
processuser(greet);
