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
    function fujiannanren(name, age, sex) {
        if (sex === void 0) { sex = '男'; }
        var _this = _super.call(this, name, age) || this;
        _this.sex = sex;
        return _this;
    }
    fujiannanren.prototype.maifang = function () {
        console.log("\u5927\u5BB6\u597D\uFF0C\u6211\u662F" + this.name + "\uFF01\u56E0\u4E3A\u6211\u662F" + this.sex + "\u4EBA\uFF0C\u6240\u4EE5\u6211\u8981\u4E70\u623F\u3002\u623F\u5B50\u597D\u8D35\u554A\uFF0C\u545C\u545C\u545C");
    };
    return fujiannanren;
}(fujianren));
var ergou = new fujiannanren('二狗', 24);
ergou.say();
ergou.maifang();
