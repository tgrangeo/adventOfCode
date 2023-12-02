import * as fs from 'fs';


var str = fs.readFileSync('input.txt', 'utf8');
var array = str.split('\n')
var sum = 0
array.forEach((e) => {
	var n = e.substring(e.indexOf(':') + 1, e.length).split((/,|;/))
	var red = 0, green = 0, blue = 0
	n.forEach((i) => {
		if (i.includes("red"))
			if (parseInt(i) > red)
				red = parseInt(i)
		if (i.includes("green"))
			if (parseInt(i) > green)
				green = parseInt(i)
		if (i.includes("blue"))
			if (parseInt(i) > blue)
				blue = parseInt(i)
	})
	sum += (red * green * blue)
})
console.log(sum)