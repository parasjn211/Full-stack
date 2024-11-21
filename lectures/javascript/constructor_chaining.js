class A{
    constructor(){
        console.log("In A")
    }
}
class B extends A{
    constructor(){
        super()
        console.log("In B")
    }
}
class C extends B{
    constructor(){
        super()
        console.log("In C")
    }
}
let ob = new C()