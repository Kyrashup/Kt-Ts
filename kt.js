var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, login, password, grade) {
        this._name = name;
        this._login = login;
        this._password = password;
        this._grade = grade;
        User.count++;
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            this._name = newName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "login", {
        get: function () {
            return this._login;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return '********';
        },
        set: function (newPassword) {
            this._password = newPassword;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.showInfo = function () {
        console.log("Name: ".concat(this._name, ", Login: ").concat(this._login));
    };
    User.prototype.eq = function (otherUser) {
        return this._grade === otherUser.getGrade();
    };
    User.prototype.lt = function (otherUser) {
        return this._grade < otherUser.getGrade();
    };
    User.prototype.gt = function (otherUser) {
        return this._grade > otherUser.getGrade();
    };
    User.prototype.getGrade = function () {
        return this._grade;
    };
    User.count = 0;
    return User;
}());
var SuperUser = /** @class */ (function (_super) {
    __extends(SuperUser, _super);
    function SuperUser(name, login, password, role) {
        var _this = _super.call(this, name, login, password, 0) || this; // SuperUser grade is always 0
        _this._role = role;
        SuperUser.count++;
        return _this;
    }
    Object.defineProperty(SuperUser.prototype, "role", {
        get: function () {
            return this._role;
        },
        set: function (newRole) {
            this._role = newRole;
        },
        enumerable: false,
        configurable: true
    });
    SuperUser.prototype.showInfo = function () {
        console.log("Name: ".concat(this._name, ", Login: ").concat(this._login, ", Role: ").concat(this._role));
    };
    SuperUser.count = 0;
    return SuperUser;
}(User));
var user1 = new User('Paul McCartney', 'paul', '1234', 3);
var user2 = new User('George Harrison', 'george', '5678', 2);
var user3 = new User('Richard Starkey', 'ringo', '8523', 3);
var admin = new SuperUser('John Lennon', 'john', '0000', 'admin');
user1.showInfo();
admin.showInfo();
var userCount = User.count;
var superUserCount = SuperUser.count;
console.log("Total regular users: ".concat(userCount));
console.log("Total super users: ".concat(superUserCount));
console.log(user1.lt(user2));
console.log(admin.gt(user3));
console.log(user1.eq(user3));
user3.name = 'Ringo Starr';
user1.password = 'Pa$$w0rd';
console.log(user3.name);
console.log(user2.password);
console.log(user2.login);
try {
    throw new Error("Login change is not allowed!");
}
catch (error) {
    console.log(error.message);
}
console.log(user3.getGrade());
