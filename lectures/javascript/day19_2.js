let arr=[10,20,30,40,50]
let obj={id:100,name:'abc',address:"xyz"}
let m1=new Map()
m1.set("id",100)
m1.set("name","abc")
m1.set("address","xyz")
for (const k in arr) {
    console.log(k)
}
console.log("*******************************Object******************")
for (let k in obj) {
    console.log(k)
}
console.log("*******************************Map******************")
for (const v of arr) {
    console.log(v)
}
console.log("****************************************************")
for (const v of arr) {
    console.log(v)
}