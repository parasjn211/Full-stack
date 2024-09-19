function show(){
    console.log("Hello")
}
// function check(num){
//     if(num%2==0)
//         console.log(`The given number is even`)
//     else
//         console.log(`The given number is odd`)
// }
// function checkAge(age){
//     if(age>=18)
//         console.log(`You can cast a vote`)
//     else
//     console.log(`The given number is even`)
// }
// Using shorthand for the if else statements
function check(num){
let s1=num%2==0?"Even":"Odd"
console.log(s1)
}
function checkAge(age){
let s2=age>=18?"You can cast a vote":"You cannot cast a vote" 
console.log(s2)
}

show()
check(45)
check(46)
checkAge(18)
checkAge(17)
checkAge(19)