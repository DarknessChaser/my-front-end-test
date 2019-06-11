const schedule = require('node-schedule');
const child_process = require('child_process');

function startTest() {
    var mochaTest = child_process.exec('mocha --growl --reporter mochawesome api_test.js --reporter-options reportDir=mochawesome-report/mochawesome-report', function (error, stdout, stderr) {
        // if (error) {
        //     console.log(error.stack);
        //     console.log('Error code: ' + error.code);
        //     console.log('Signal received: ' + error.signal);
        // }
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
    });

    mochaTest.on('exit', function (code) {
        if (code === 0) {
            console.log('mochaTest成功执行完毕');
        } else {
            console.log('mochaTest已退出，退出码' + code);
        }
    });
}

startTest();

var rule = new schedule.RecurrenceRule();

schedule.scheduleJob('*/10 * * * * *', function () {
    startTest();
});
