var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.setuser = function (name, address) {
        this.name = name;
        this.address = address;
    };
    User.prototype.displayuser = function () {
        console.log(this.name);
        console.log(this.address);
        console.log(this.userlength());
    };
    User.prototype.userlength = function () {
        console.log(this.name.length);
        console.log(this.address.length);
    };
    return User;
}());
var user = new User();
user.setuser("Anurag sahu", "M.P");
user.displayuser;
console.log(user);
