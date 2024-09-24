let arr=[10,20,30,40,50]
// console.log(arr[0])
// console.log(arr.at(0))
// console.log(arr[-10])
// console.log(arr.at(-1))
//using for loop
// for (let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

//by using forEach method

function show(x){
    console.log(x)
}
arr.forEach(show)
//by using array function
arr.forEach((x)=>console.log(x))

//map function
//converts each array value into different value

let arr1=[10,20,30]
let arr2=arr1.map((p)=>{
    let z=p*p
    return z
})
console.log(arr2)