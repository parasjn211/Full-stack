//string methods
let s=`Hello World`
console.log(s)
let m1=s.toUpperCase()
console.log(m1)
console.log(s.toUpperCase())
let m2=s.toLowerCase()
console.log(m2)
console.log(s.toLowerCase())
let m3=s.indexOf(`l`)
console.log(m3)
console.log(s.indexOf(`o`))
console.log(s.indexOf(`lo`))
console.log(s.indexOf(`l`))

console.log("Printing l's index as much l is present")
let s1="Helol World"
let x=-1
do{
    x=s1.indexOf(`l`,x+1)
    console.log(x)
}while(x!=-1);