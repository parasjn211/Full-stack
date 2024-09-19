// Callback function
//Callback functions are those which are called in future in this case even and odd are the callback function
const even=()=>console.log(`Given number is Even`)
const odd=()=>console.log(`Given number is Odd`)
const check=(x, fun1, fun2)=>{
    if(x%2==0)
        fun1()
    else
        fun2()
}
check(11, even, odd)
check(12, even, odd)