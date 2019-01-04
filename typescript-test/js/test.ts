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
    public name: string;
    public age: number;

    public constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    say(): void {
        console.log(`大家好我叫${this.name}，今年${this.age}岁了`)
    }
}

class fujiannanren extends fujianren {
    public sex: string;

    public constructor(name: string, age: number, sex: string = '男') {
        super(name, age);
        this.sex = sex;
    }

    maifang(): void {
        console.log(`大家好，我是${this.name}！因为我是${this.sex}人，所以我要买房。房子好贵啊，呜呜呜`);
    }
}

let ergou = new fujiannanren('二狗', 24);
ergou.say();
ergou.maifang()
