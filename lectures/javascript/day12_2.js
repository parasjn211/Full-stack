let arr=[{"id":100, name:"abc", "age":2},
    {"id":200, name:"xyz", "age":23},
    {"id":300, name:"pqr", "age":5},
    {"id":400, name:"xyz", "age":20}
]
let ob2=arr.find((p)=>p.id==300)
console.log(ob2)
ob2=arr.find((p)=>p.id==900)
console.log(ob2)
//###############################
let index=arr.findIndex((p)=>p.id==300)
console.log(index)