const l = 5 // can't be changed in anyway scope
let b = 4 //declaration of the variable
var c = 3
function add(a,b,c){
    b = 2 //updating the variable 
    var c = 1 //function scoped so the actual value of c outside the function doesn't change
    console.log(b)
    console.log(c)
}

var c = 0 // global scoped the actual value of the c is changed from 3 to 0
add()
console.log(b)
console.log(c)