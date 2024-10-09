class test{
    #firstname
    #lastname
    constructor(fname, lname){
    this.#firstname=fname
    this.#lastname=lname
    }
    show(){
    console.log(`first name ${this.#firstname}`)
    console.log(`last name ${this.#lastname}`)
    }
    }
    let ob1=new test("abc","xyz")
    let ob2=new test("pqr","qqq")
    ob1.show()
    ob2.show()
    