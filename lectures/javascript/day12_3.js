function msort(x,y){
    //for ascending order
    if(x==y) return 0;
    if(x>y) return 1;
    if(x<y) return -1;
    
    //for descending order
    // if(x==y) return 0;
    // if(x>y) return -1;
    // if(x<y) return 1;

}
let arr=[1,2,15]
console.log(arr)
arr.sort(msort)
console.log(arr)