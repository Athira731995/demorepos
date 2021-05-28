var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city; // console.log("Person class Constructor")
    }
    return Person;
}());
var Faculty = /** @class */ (function (_super) {
    __extends(Faculty, _super);
    function Faculty(name, age, city, dept_name, Facid) {
        var _this = _super.call(this, name, age, city) || this;
        _this.dept_name = "CS";
        _this.Fac_id = "F101";
        _this.dept_name = dept_name;
        _this.Fac_id = Facid;
        return _this;
        //  console.log("child class Constructor")
    }
    Faculty.prototype.display = function () {
        console.log("Name : " + this.name);
        console.log("Age : " + this.age);
        console.log("City : " + this.city);
        console.log("Dept_name : " + this.dept_name);
        console.log("Facid: " + this.Fac_id);
    };
    return Faculty;
}(Person));
var f = new Faculty("Anna", 12, "Nyc", "CSE", "f101");
f.display();
// console.log(f.name)
// console.log(f.age)
// console.log(f.dept_name)
