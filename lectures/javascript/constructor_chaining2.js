class A{
    constructor(){
	this.i=100
        console.log("In A")
    }
}
class B extends A{
    constructor(){
        super()
	this.j=200
        console.log("In b")
    }
	add(){
	console.log(this.i+this.j)
}
}
let ob = new B()
ob.add()