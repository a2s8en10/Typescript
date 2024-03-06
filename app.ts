// # Type Alias

// custom type
type User = {

    name : string ;

    age : number ;

    address ?: string ;

    phonenumber ?: number ;

}


// use the custom type

const student : User = {

    name : 'Anurag',

    age : 20,

    address : 'Satna'  // (Its a optional or undefined property )

    // phonenumber : 122121211 (Its a optional or undefined property )
}

console.log(student)

var employee : User = {

    name : 'relax',

    age : 11,

    phonenumber : 2332532532

}


console.log(employee)