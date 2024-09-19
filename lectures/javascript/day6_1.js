//  if-else in javascript

    // function check(x){
    //     if(x%2==0)
    //     console.log("The number is even.")
    //     else
    //     console.log("The number is odd.")
    // }
    // function checkAge(x){
    //     if(x>=18)
    //         console.log("You can cast a vote")
    //     else
    //         console.log("you cannot cast a vote")
    // }

    // using shortcut for the if-else

    function check(x){
        let y=x%2==0?"even":"Odd"
        console.log(`The number ${x} is ${y}.`)
    }
    function checkAge(x){
        let y=x>18?"You can vote":"You cannot vote"
        console.log(`${y}.`)

    }
    check(21)
    check(22)
    checkAge(18)
    checkAge(17)
    checkAge(10)
    checkAge(20)