((m, n) => {
    let a = new Array(m + 1).join(',' + n)
    let b = a.split(',');
    return b.slice(1);
})(10, 'abc')

// for (let i = 0; i < 10; i++) {
//     setInterval(function () {
//         console.log(i)
//     },100)
// }
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
interface renlei {
    name:string,
    sex:string
}
function say(person:renlei) {
    console.log(`my name is ${person.name},sex is ${person.sex}`);
}
say(ergou);

let a = new Promise((resolve, reject) => {
    let b = Math.random()*10
    console.log('a生成的随机数是'+b)
    if(b>5){
        resolve(b)
    } else {
        reject(b)
    }
})

let c = new Promise((resolve, reject) => {
    let d = Math.random()*10
    console.log('c生成的随机数是'+d)
    if(d>5){
        resolve(a)
    } else {
        reject(a)
    }
})
a.then((num)=>{
    console.log('这是一个大于5的数'+num)
},num=>{
    console.log('这是一个小于5的数'+num)
})
