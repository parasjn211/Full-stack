let arr=[10,20,30,40,50]
console.log(arr)
arr.push(100)
console.log(arr)
function show(x){
    console.log(x)
}
arr.forEach(show)

// using the array function for show
arr.forEach((x)=>console.log(x))
arr.forEach((x)=>{
    console.log("Hello")
    console.log(x)
})