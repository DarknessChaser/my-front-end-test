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
var _this = this;
var testfunction = function (text) {
    console.log('箭头测试', _this, text);
};
var testfunction2 = function (text) {
    console.log('箭头测试', this, text);
};
testfunction('hello');
testfunction2('hello');
function add(a, b) {
    return Number(a) + Number(b);
}
console.log(add('123', 546));
function createName(name) {
    if (typeof name === "string") {
        return name;
    }
    else {
        return name.join(" ");
    }
}
var greetingMessage = "Greetings, " + createName(["Sam", "Smith"]);
//alert(greetingMessage);
(function (m, n) {
    var a = new Array(m + 1).join(',' + n);
    var b = a.split(',');
    return b.slice(1);
})(10, 'abc');
var TemplateEngine = function (tpl, data) {
    var re = /<%([^%>]+)?%>/;
    var match;
    while (match = re.exec(tpl)) {
        tpl = tpl.replace(match[0], data[match[1]]);
    }
    return tpl;
};
var template = '<p><%age%>岁，是<%job%></p>';
console.log(TemplateEngine(template, {
    age: 24,
    job: "学生"
}));
var fujianren = /** @class */ (function () {
    function fujianren(name, age) {
        this.name = name;
        this.age = age;
    }
    fujianren.prototype.say = function () {
        console.log("\u5927\u5BB6\u597D\u6211\u53EB" + this.name + "\uFF0C\u4ECA\u5E74" + this.age + "\u5C81\u4E86");
    };
    return fujianren;
}());
var fujiannanren = /** @class */ (function (_super) {
    __extends(fujiannanren, _super);
    function fujiannanren(sex) {
        var _this = this;
        _this.sex = sex;
        return _this;
    }
    return fujiannanren;
}(fujianren));
