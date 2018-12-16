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

function add(a:strNumber,b:strNumber) {
    return Number(a)+Number(b);
}

console.log(add('123',546))
function createName(name: NameOrNameArray) {
    if (typeof name === "string") {
        return name;
    }
    else {
        return name.join(" ");
    }
}

var greetingMessage = `Greetings, ${ createName(["Sam", "Smith"]) }`;
alert(greetingMessage);

// class Animal {
//     constructor(public  name: string) {
//     };
//
//     say(sound: string = '叫') {
//         console.log(`${this.name},${sound}`)
//     }
// }
//
// class Dog extends Animal {
//     constructor(public name: string) {
//         super(name);
//     }
//
//     say(sound: string = '汪汪') {
//         super.say(sound);
//     }
//
//     jump(name: string) {
//         console.log(`${name}正在一边${this.say()}，一边跳`);
//     }
// }
//
// class Cat extends Animal {
//     constructor(public name: string) {
//         super(name);
//     }
//
//     say(sound: string = '喵喵喵') {
//         super.say(sound);
//     }
// }
//
// let ergou = new Dog('二狗');
// ergou.say('大家好!');
// ergou.jump('二狗');
// let ermao = new Cat('二猫');
// ermao.say();
//
// let sangou = new Dog('三狗');
// sangou.say('三狗汪汪汪');

