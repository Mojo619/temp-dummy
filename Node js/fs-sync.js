const{readFileSync, writeFileSync} = require('fs')

console.log('start');

const first = readFileSync('./content/first.txt','utf8')

const second = readFileSync('./content/second.txt','utf8')

writeFileSync('./content/resultSync.txt',`here is the result: ${first},${second}`,{flag:'a'})

//{flag:'a'} simply repeats the statement once more

console.log('done with this task')

console.log('starting the next one')