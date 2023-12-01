"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var str = fs.readFileSync('input.txt', 'utf8');
var array = str.split('\n');
var sum = 0;
array.forEach(function (e) {
    var str = "";
    for (var i = 0; i < e.length; i++) {
        console.log(str);
        if (Number(e[i]))
            str += e[i];
        if (e.startsWith("one", i))
            str += "1";
        if (e.startsWith("two", i))
            str += "2";
        if (e.startsWith("three", i))
            str += "3";
        if (e.startsWith("four", i))
            str += "4";
        if (e.startsWith("five", i))
            str += "5";
        if (e.startsWith("six", i))
            str += "6";
        if (e.startsWith("seven", i))
            str += "7";
        if (e.startsWith("height", i))
            str += "8";
        if (e.startsWith("nine", i))
            str += "9";
    }
    str = String(str[0]).concat(str[str.length - 1]);
    if (Number(str))
        sum += Number(str);
});
console.log(sum);
