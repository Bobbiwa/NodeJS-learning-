/**
 * 
 * @param {string} parm 
 * @returns {string}
 */
function reverseString(str) {
    return str.split('').reverse().join('')
}
console.log(reverseString('123 456'));
