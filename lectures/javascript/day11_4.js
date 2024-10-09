//filter function

let arr=["aaaaaa","aa","bbbbb","aaa","a"]
let arr2=[5,10,20,60,3,80,1,2]
// for(let i=0; i<arr_1_2.length; i++){
//     if(arr2[i]>10){
//         arr3.push(arr_1_2)
//     }
// }
let arr4=arr2.filter((x)=>x>10)
console.log(arr4)
let arr5=arr.filter((x)=>x.length>2)
console.log(arr5)