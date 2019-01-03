let testfunction = (text: string) => {
    console.log('箭头测试', this, text)
}
let testfunction2 = function (text: string) {
    console.log('箭头测试', this, text)
}
testfunction('hello')
testfunction2('hello')

type NameOrNameArray = string | string[];
type strNumber = string | number;

function add(a: strNumber, b: strNumber) {
    return Number(a) + Number(b);
}

console.log(add('123', 546))

function createName(name: NameOrNameArray) {
    if (typeof name === "string") {
        return name;
    } else {
        return name.join(" ");
    }
}

let greetingMessage = `Greetings, ${createName(["Sam", "Smith"])}`;
//alert(greetingMessage);

((m, n) => {
    let a = new Array(m + 1).join(',' + n)
    let b = a.split(',');
    return b.slice(1);
})(10, 'abc')

let TemplateEngine = function (tpl, data) {
    let re = /<%([^%>]+)?%>/;
    let match;
    while (match = re.exec(tpl)) {
        tpl = tpl.replace(match[0], data[match[1]])
    }
    return tpl;
}
let template = '<p><%age%>岁，是<%job%></p>';
console.log(TemplateEngine(template, {
    age: 24,
    job: "学生"
}));

class fujianren {
    constructor(public name: string, public age: number) {

    }

    say() {
        console.log(`大家好我叫${this.name}，今年${this.age}岁了`)
    }
}

class fujiannanren extends fujianren {
    constructor(public name: string, public age: number,public sex: string) {
        super(name, age);
    }

    say() {
        console.log(`大家好我叫${this.name}，${this.sex},今年${this.age}岁了`)
    }
}

let ergou = new fujiannanren('二狗',24,'男');
ergou.say();
