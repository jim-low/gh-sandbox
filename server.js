const readline = require('readline')
const rl = readline.createInterface({input: process.stdin, output: process.stdout})

rl.question("What's 9 + 10? ", (usrInput) => {
	if(usrInput.trim() === "21") console.log("you stoopid");
	else console.log("why u ask me? lmao");
	rl.close()
})
