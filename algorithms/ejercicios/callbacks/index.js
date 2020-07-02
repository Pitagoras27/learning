const fs = require("fs");

const READ_FILE = "./file.txt";
const WRITE_FILE = "./write.txt";

// Callbacks
/* fs.readFile(READ_FILE, (err, content) => {
	if (err) throw err;
	fs.writeFile(WRITE_FILE, content.length, (err) => {
		if (err) throw err;
		console.log(`La longitud del archivo leído es: ${content.length}`);
	});
}); */

// Promesas 
readFile = (file) => {
	return new Promise((resolve, reject) => {
		fs.readFile(file, (err, content) => {
			if(err) reject();
			resolve(content);
		});
	});
}

writeFile = (file, content) => {
	return new Promise((resolve, reject) => {
		fs.writeFile(file, content, (err) => {
			if (err) reject();
			resolve(content.length);
		});
	});
}

readFile(READ_FILE)
	.then(res => {
		writeFile(WRITE_FILE, res)
			.then(res => console.log(`La longitud del archivo leído es: ${res}`))
	})
	.catch(err => console.log("El error es ->", err));