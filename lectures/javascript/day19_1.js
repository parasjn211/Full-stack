//create set object
let arr=[10,20,30,10,20]
let s1=new Set(arr)
console.log(s1)
//add value into set object
s1.add(90)
s1.add(80)
console.log(s1)
//check specific value present in set
console.log(s1.has(20))
console.log(s1.has(120))
if(s1.has(120)){
    console.log("Value present")
}else{
    console.log("Value is not present")
}
//delete value from set object
console.log(s1)
s1.delete(20)
console.log(s1)
//checking size of set
let n=s1.size
console.log(`Size of set is ${n}`)
//clear
s1.clear()
console.log(s1)