const fs = require("fs");

const contents = fs.readFileSync("./Object1.json").toString()

const obj = JSON.parse(contents)

console.log(typeof contents)
// console.log(JSON.stringify(obj))

obj.read = !obj.read;
fs.writeFileSync("./Object1.json", JSON.stringify(obj))
