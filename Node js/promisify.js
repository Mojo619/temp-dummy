const {readFile,writeFile} = require('fs');
const util = require('util')

const readFilePromise = util.promisify(readFile)

//writing a new file using promisify!

const writeFilePromise = util.promisify(writeFile)





const start = async ()=>{

    try{
const first = await readFilePromise('./content/first.txt','utf8')
const second = await readFilePromise('./content/second.txt','utf8')

await writeFilePromise('./content/result-mind-grenade.txt',`This is Awesome!:${first} ${second}`)
console.log(first,second)
    }catch(error){
console.log(error)
    }
}


start()
