class student {
    name : ''
    age : undefined

addstudent (student)
{
    return `${student} is added0`
}

removestudent (student)
{
    console.warn(`${student} is remove`);

}

}

const anu = new student;
let b = anu.addstudent (anu);

console.log(b);


