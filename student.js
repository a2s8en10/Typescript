var student = /** @class */ (function () {
    function student() {
    }
    student.prototype.add = function (student) {
        return "".concat(student, " is added");
    };
    student.prototype.remove = function (student) {
        console.warn("".concat(student, " is remove"));
    };
    return student;
}());
var anu = new student;
var r = anu.remove('Anu');
console.log(r);
var a = anu.add('Anurag sahu');
console.log(a);
