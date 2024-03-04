//let role : number[] | string [] = ['admin','hod'] // this is array are method are only string and number tuple are not allowed

let role: [string,string,(number|string),number,string?]= ["admin", "manager", 1, 2];

role [1] = 'User';
role.push ("Name");
console.warn(role);

