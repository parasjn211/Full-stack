// Arrow function

//Normal function
function square(x){
    return x*x
}
console.log(square(5))

//Arrow function of the above function
//There are two types of arrow function
// 1.single line arrow function
// 2.multi line arrow function

//following is a single line arrow function. here no need to write return keyword
let square1=(x)=>x*x
square(5)
console.log(square1(5))

function add(x,y){
    return x+y
}
console.log(add(2,3))

// arrow function of the add function is 
let add1=(x,y)=>x+y
console.log(add1(2,3))