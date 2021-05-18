"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var fs = require("fs");

var contents = fs.readFileSync("./Object1.json").toString();
var obj = JSON.parse(contents);
console.log(_typeof(contents)); // console.log(JSON.stringify(obj))

obj.read = !obj.read;
fs.writeFileSync("./Object1.json", JSON.stringify(obj));