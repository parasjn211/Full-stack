//Method overridding
class A{
    sayHello(){
        console.log("In A")
    }
}
class B extends A{
    sayHello(){
        console.log("In B")
    }
	
}

let ob = new B()
ob.sayHello()