import * as fs from 'fs';


var str = fs.readFileSync('input.txt', 'utf8');
var array = str.split('\n')
var sum = 0
array.forEach((e) => {
	var id = Number(e.substring(e.indexOf(' '), e.indexOf(':')))
	var n = e.substring(e.indexOf(':') + 1, e.length).split((/,|;/))
	var good = true
	n.forEach((i) => {
		if (i.includes("red"))
			if (parseInt(i) > 12)
				good = false
		if (i.includes("green"))
			if (parseInt(i) > 13)
				good = false
		if (i.includes("blue"))
			if (parseInt(i) > 14)
				good = false
	})
	if (good)
		sum += id
})
console.log(sum)