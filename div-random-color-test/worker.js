import throttle from "./lodash-es/throttle.js";

self.addEventListener('message', (e) => {
    const {data: [type, times]} = e;
    console.log(type, times);
    if (type === 'create task') {
        createColor(times);
    }
})

var colorSet = new Set();

function getRandomRGBColor() {	//随机生成rgb颜色
    function getRGBNumber() {
        return Math.floor(Math.random() * 255);
    }

    function getRGBColor() {
        return 'rgb(' + getRGBNumber() + ',' + getRGBNumber() + ',' + getRGBNumber() + ')';
    }

    var randomRGBColor = getRGBColor();
    while (colorSet.has(randomRGBColor)) {
        randomRGBColor = getRGBColor();
    }
    return randomRGBColor;
}

async function createColor(times) {
    // const {default: throttle} = await import('./lodash-es/throttle.js');
    let colorArray = [];
    const post = throttle(() => {
        self.postMessage(['send random color', colorArray]);
        colorArray = [];
    }, 16)
    for (let i = 0; i < times; i++) {
        // colorArray.push(getRandomRGBColor());
        colorArray.push(getRandomRGBColor());
        post();
    }
    console.log('end worker');
}
