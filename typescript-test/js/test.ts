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

var greetingMessage = `Greetings, ${createName(["Sam", "Smith"])}`;
alert(greetingMessage);

((m, n) => {
    let a = new Array(m + 1).join(',' + n)
    let b = a.split(',');
    return b.slice(1);
})(10, 'abc')
