const fs = require("fs");
const path = require("path");

// 此处应当有搜索的目录
const root = path.resolve(__dirname, "./mvp");

function JudgeFile(filePath) {
  fs.readdir(filePath, "utf8", function(err, files) {
    files.forEach(function(item, index) {
      if (item != "lib") {
        let itemPath = path.join(filePath, item);
        // console.log(itemPath + 'searched');
        fs.stat(itemPath, function(err, stat) {
          if (err) {
            console.log(err);
            throw err;
          }
          if (stat.isFile()) {
            ReplaceFile(itemPath);
          }
          if (stat.isDirectory()) {
            JudgeFile(itemPath);
          }
        });
      }
    });
  });
}

let showData = {};
let showFlag = null;
function ReplaceFile(itemPath) {
  fs.readFile(itemPath, function(err, data) {
    if (err) {
      return;
    }

    // 此处应当有目标字符串
    let urlList = [];

    urlList.forEach((item, index) => {
      if (data.indexOf(item) > 0) {
        if (showData[item]) {
          showData[item].push(itemPath);
        } else {
          showData[item] = new Array();
          showData[item].push(itemPath);
        }
      }
    });

    clearTimeout(showFlag);
    showFlag = setTimeout(function() {
      console.log("\033[2J");
      Object.keys(showData).forEach(function(item) {
        console.log("\n内部URL:\n" + item);
        console.log("所在的文件:");
        showData[item].forEach(function(item) {
          console.log(item);
        });
      });
    }, 5000);
  });
}

JudgeFile(root);
console.log("\033[2J", "文件加载中...");
