class student {
    name : ''
    address : ''

add (student)
{
    return `${student} is added`
}

remove (student)
{
    console.warn(`${student} is remove`);

}

}
const anu = new student;

const r = anu.remove('Anu')
console.log(r);

let a = anu.add ('Anurag sahu');
console.log(a);

