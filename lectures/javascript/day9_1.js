//Strings in js
let fname = "xyz"
let s1='Hello ${fname}'//${fname} will be printed as it is 
console.log(s1)
let s2="Hello ${fname}"//${fname} will be printed as it is
console.log(s2)
let s3=`Hello ${fname}`//Here value of the fname will be printed i.e xyz
console.log(s3)

//Accessing string elements
let s=`Hello World`

//We can access the string elements by subscript i.e []
let n=s.length
console.log(n)
console.log(s[4])
console.log(s[6])
console.log(s[8])
console.log(s[-1])//Negative indexing is not accepted in the subscripting

//we can access the string elements by at() function
x=
console.log(s.at(6))
console.log(s.at(7))
console.log(s.at(8))
console.log(s.at(-1))
console.log(s.at(-2))
console.log(s.at(-3))