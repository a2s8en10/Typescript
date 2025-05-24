"use strict";
let num = 213211412235;
let num1 = 424141212121212255215125212414n;
console.log("number :" + num);
console.log("Bigint :" + num1);
let char = "Anurag sahu";
console.log("String :" + char);
let hai = true;
console.log("Boolean :" + hai);
let nullHai = null;
let undefinedHai = undefined;
let user;
console.log(user);
let obj = {
    name: "anurag",
    age: 20,
};
let obj1 = {
    name: "anurag",
    age: 20,
};
let obj2 = {
    name: "anurag",
    age: 20,
};
let copy = { ...obj };
let copy1 = { obj };
console.log(copy);
console.log(copy1);
obj = { ...obj, phone: 211241241 };
console.log(obj);
let numAny;
numAny = 0;
numAny = 'anurag';
function anyType(val) {
    console.log(val);
}
let NumArray = [1, 2, 3, 4, 5];
let charArray = ["a", "b", "c"];
console.log(NumArray);
console.log(charArray);
let arr = [1, 'anu'];
console.log(arr);
let response = [200, 'Ok'];
response.push(20);
console.log(response);
var phone;
(function (phone) {
    phone["R"] = "Realme";
    phone["O"] = "Oppo";
    phone["S"] = "samsung";
})(phone || (phone = {}));
console.log(phone.O);
let Phone = phone.R;
console.log(Phone);
let Size = 3;
console.log(Size);
let notSure = 'a';
if (typeof (notSure) == "number") {
    notSure.toFixed(2);
}
else if (typeof (notSure) == "string") {
    notSure.length;
    console.log(notSure.length);
}
console.log(notSure);
//# sourceMappingURL=basic-type.js.map