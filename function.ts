function add ()
{
    return 100 ;
}
// function type is number because numeric return

function num ()
{
    return 'asd';
}
// function type is string because string return

// * function type define

function val() : number // return type is only numeric because function type are define
{
    return 12;
}

function sub() : string // return type is only numeric because function type are define
{
    return 'anu';
}

// only required the function are number and string

function str() : number | string
{
    return 23;
}

function mux (a:number,b:number) : number
{
    return a+b ;
}

console.log(mux(12,8));

// Let pass the variable

const a = 12;
const b = 'add';

function check () : number
{
    return a;
}

// check undefined and null data type function are return

const c = undefined;
const d = null ;

function fun () : null
{
    return  d ;
}




