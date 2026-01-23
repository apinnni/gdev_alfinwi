console.log("kontol");
var UserAcc = /** @class */ (function () {
    function UserAcc(id, username, email) {
        this.id = id;
        this.username = username;
        this.email = email;
    }
    UserAcc.prototype.getProfile = function () {
        console.log("Username: ".concat(this.username));
        console.log("Email: ".concat(this.email));
    };
    return UserAcc;
}());
var user1 = new UserAcc(1, "alfin", "alfin@email.com");
user1.getProfile();
