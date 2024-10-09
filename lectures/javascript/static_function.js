class student{
    #id
    static i=0
    constructor(sid){
        this.#id=sid
        student.i++
    }
    static show(){
        //cannot use instanace variable
        // console.log(`ID: ${this.#id}`)
        console.log(`Count is : ${student.i}`)

    }
}
let s1=new student(10)
let s2=new student(20)
let s3=new student(30)
//s1.show() cannot call static function using object 
student.show()