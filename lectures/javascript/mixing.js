let mix1={
    show(){
    console.log("In MIX1")
    }
    }
    let mix2={
    disp(){
    console.log("In MIX2")
    }
    }
    class A{
    constructor(){
    console.log("Constructor of A class called!!")
    }
    sayHello(){
    console.log("In A class")
    }
    }
    console.log(typeof(A))
    console.log(A.prototype.sayHello)
    Object.assign(A.prototype,mix1)
    Object.assign(A.prototype,mix2)
    let ob=new A()
    ob.sayHello()