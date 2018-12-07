let div = document.createElement('div');

let Name: string = '二狗'
let strtest: string = `我的名字叫${Name}`
let domlist:NodeListOf<HTMLLIElement> = document.querySelectorAll('li')

let arry_num: number[] = [1, 2, 3]

enum member {'群员','管理员','游客'}

for (let i = 0; i < 10 ; i++) {
    setTimeout(function() {console.log(i); }, 10 * i);
}
let m:member = member.游客
div.innerHTML = m.toString()

enum sex {
    '男',
    '女',
    '不明'

}
class Student {
    constructor(public name:string,public sex:sex,public age:number){

    }
    say(){
        return `我叫${this.name},性别${this.sex},今年${this.age}岁`
    }
}
let ergou = new Student('二狗',sex.男,24)
console.log(ergou.say())

let data:object = {
    name:'二狗',
    sex:'男'
}
let str: string = '姓名:${name},性别:${sex},年龄:${age}'

function strParse(str: string, data: object) {
    let start: number = str.indexOf('${')
    let end: number = str.indexOf('}')
    let arg = str.slice(start + 2, end)
    if(data[arg]===undefined){
        throw `${arg} is not defined!`
    }
    str = str.replace('${' + arg + '}', data[arg])
    if (str.indexOf('${') > -1) {
        return strParse(str, data)
    } else {
        return str
    }
}
//console.log(strParse(str, data))

function strParse2(str: string, data: object):string {
    for(let key in data){
        str = str.replace('${'+key+'}',data[key])
    }
    findUndefinedData(str)
    return str
}
function findUndefinedData (str:string,startFlag:number=0,endFlag:number=0) {
    let start: number = str.indexOf('${',startFlag)
    let end: number = str.indexOf('}',endFlag)
    if(start>-1||end>-1){
        let keyStr = str.slice(start+2,end)
        console.error(`${keyStr} is not defined!`)
        return findUndefinedData(str,start+1,end+1)
    } else {
        return false
    }
}
console.log(strParse2(str, data))

let testfunction = (text)=>{
    console.log('箭头测试',this,text)
}
let testfunction2 = function (text){
    console.log('箭头测试',this,text)
}
testfunction('hello')
testfunction2('hello')
// document.body.appendChild(div)
