var _this = this;
var div = document.createElement('div');
var Name = '二狗';
var strtest = "\u6211\u7684\u540D\u5B57\u53EB" + Name;
var domlist = document.querySelectorAll('li');
var arry_num = [1, 2, 3];
var member;
(function (member) {
    member[member["\u7FA4\u5458"] = 0] = "\u7FA4\u5458";
    member[member["\u7BA1\u7406\u5458"] = 1] = "\u7BA1\u7406\u5458";
    member[member["\u6E38\u5BA2"] = 2] = "\u6E38\u5BA2";
})(member || (member = {}));
var _loop_1 = function (i) {
    setTimeout(function () { console.log(i); }, 10 * i);
};
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}
var m = member.游客;
div.innerHTML = m.toString();
var sex;
(function (sex) {
    sex[sex["\u7537"] = 0] = "\u7537";
    sex[sex["\u5973"] = 1] = "\u5973";
    sex[sex["\u4E0D\u660E"] = 2] = "\u4E0D\u660E";
})(sex || (sex = {}));
var Student = /** @class */ (function () {
    function Student(name, sex, age) {
        this.name = name;
        this.sex = sex;
        this.age = age;
    }
    Student.prototype.say = function () {
        return "\u6211\u53EB" + this.name + ",\u6027\u522B" + this.sex + ",\u4ECA\u5E74" + this.age + "\u5C81";
    };
    return Student;
}());
var ergou = new Student('二狗', sex.男, 24);
console.log(ergou.say());
var data = {
    name: '二狗',
    sex: '男'
};
var str = '姓名:${name},性别:${sex},年龄:${age}';
function strParse(str, data) {
    var start = str.indexOf('${');
    var end = str.indexOf('}');
    var arg = str.slice(start + 2, end);
    if (data[arg] === undefined) {
        throw arg + " is not defined!";
    }
    str = str.replace('${' + arg + '}', data[arg]);
    if (str.indexOf('${') > -1) {
        return strParse(str, data);
    }
    else {
        return str;
    }
}
//console.log(strParse(str, data))
function strParse2(str, data) {
    for (var key in data) {
        str = str.replace('${' + key + '}', data[key]);
    }
    findUndefinedData(str);
    return str;
}
function findUndefinedData(str, startFlag, endFlag) {
    if (startFlag === void 0) { startFlag = 0; }
    if (endFlag === void 0) { endFlag = 0; }
    var start = str.indexOf('${', startFlag);
    var end = str.indexOf('}', endFlag);
    if (start > -1 || end > -1) {
        var keyStr = str.slice(start + 2, end);
        console.error(keyStr + " is not defined!");
        return findUndefinedData(str, start + 1, end + 1);
    }
    else {
        return false;
    }
}
console.log(strParse2(str, data));
var testfunction = function (text) {
    console.log('箭头测试', _this, text);
};
var testfunction2 = function (text) {
    console.log('箭头测试', this, text);
};
testfunction('hello');
testfunction2('hello');
// document.body.appendChild(div)
