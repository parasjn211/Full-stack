class A{
    constructor(x){
	this.i=x
        console.log("In A")
    }
}
class B extends A{
    constructor(a,b){
        super(b)
	this.j=a
        console.log("In b")
    }
	add(){
	console.log(this.i+this.j)
}
}
let ob = new B(201,101)
ob.add()