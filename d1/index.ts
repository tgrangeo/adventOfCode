import * as fs from 'fs';


var str = fs.readFileSync('input.txt','utf8');
var array = str.split('\n')
var sum = 0
array.forEach((e)=> {
	var tmp = e.replace(/[^0-9]/g,"");
	str = String(tmp[0]).concat(tmp[tmp.length - 1])
	if (Number(str))
		sum += Number(str)
})
console.log(sum)