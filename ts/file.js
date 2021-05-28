var Card = /** @class */ (function () {
    function Card(type, name, Acc_Name, exp_date) {
        this.type = type;
        this.name = name;
        this.exp_date = exp_date;
        this.Acc_name = Acc_Name;
    }
    //instance methods or member functions
    Card.prototype.getDiscount = function (Amount) {
        if (this.type == "Platinum") {
            console.log("You need to pay ", Amount * 0.5);
        }
        else if (this.type == "Gold") {
            console.log("You need to pay ", Amount * 0.3);
        }
        else if (this.type == "Silver") {
            console.log("You need to pay ", Amount * 0.25);
        }
    };
    return Card;
}());
var card1 = new Card("Silver", "Master Card", "Anitha ", new Date().toDateString());
console.log(card1);
card1.getDiscount(50000);
function getValue(value) {
    console.log(value);
}
getValue(100);
getValue("hello");
getValue(["a", "b", "c"]);
function add(x, y) {
    if (y === void 0) { y = 40; }
    console.log(x + y);
}
add(10);
add(1, 2);
//rest parameter 
function getNumbers() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sum = 0;
    args.forEach(function (data) {
        sum += data;
    });
    console.log("sum of values =", sum);
}
getNumbers(10, 12, 14, 20.25, 400);
