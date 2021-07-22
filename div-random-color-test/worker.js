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

function createColor(times) {
    for (let i = 0; i < times; i++) {
        self.postMessage(['send random color', getRandomRGBColor()]);
    }
}
