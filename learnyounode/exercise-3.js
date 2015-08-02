var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var arr = buf.toString().split('\n');

console.log(arr.length -1);