/**
 * 
 * @param {string} parm 
 * @returns {string}
 */
const {stdin,stdout} = require('process')
stdin.on('data',(buffer)=>{
    const input = buffer.toString();
    stdout.write(`${reverseString(input)}\n`)
})

function reverseString(str) {
    return str.split('').reverse().join('')
}
