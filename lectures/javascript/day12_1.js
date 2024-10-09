// let obj={id:100, name:"abc", age:23}
// console.log(obj.id)
// console.log(obj.name)
// console.log(obj.age)
// let emp={id:2,"salary":700}
// console.log(emp.id)
// console.log(emp.salary)
/*************************************** */
let arr=[{id:100, name:"abc",age:2},
    {id:200, name:"xyz",age:23},
    {id:300, name:"pqr",age:5},
    {id:400, name:"xyz",age:20}
]
let arr2=arr.filter((p)=>p.age>=18)
console.log(arr2)


