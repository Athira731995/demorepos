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
var Polygon = /** @class */ (function () {
    function Polygon() {
    }
    Polygon.prototype.draw = function () {
        console.log("Drawing shapes......");
    };
    return Polygon;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(l, b) {
        var _this = _super.call(this) || this;
        _this.length = l;
        _this.breadth = b;
        return _this;
    }
    Rectangle.prototype.draw = function () {
        _super.prototype.draw.call(this);
        console.log("Drawing a Rectangle with length", this.length, "and breadth ", this.breadth);
    };
    return Rectangle;
}(Polygon));
var r = new Rectangle(10, 12);
r.draw();
console.log(r instanceof Polygon);
console.log(r instanceof Rectangle);
