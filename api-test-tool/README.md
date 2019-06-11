# api-test-tool
一个api测试小脚本

下载后请使用`npm i`安装依赖，配置文件参考`config.js`。

运行单次测试
```
    npm run test:once
    或
    mocha --growl --reporter mochawesome api_test.js
```

运行定时测试
```
    npm run test:timed
    或
    node exec.js
```

定时配置可以在`exec.js`中修改，详情参考[基于mocha的简单定时api测试](https://darknesschaser.github.io/2019/04/15/%E5%9F%BA%E4%BA%8Emocha%E7%9A%84%E7%AE%80%E5%8D%95%E5%AE%9A%E6%97%B6api%E6%B5%8B%E8%AF%95/ '基于mocha的简单定时api测试')
