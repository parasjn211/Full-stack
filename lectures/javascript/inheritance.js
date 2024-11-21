class A{
    show(){
        console.log("Hello world")
    }
}
class B extends A{
    disp(){
        console.log("Hi")
    }
}
let ob = new B()
ob.show()
ob.disp()