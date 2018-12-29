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
