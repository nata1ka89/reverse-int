module.exports = function reverse (n) {
let reversedNumber=Math.abs(n).toString().split('').reverse().join('');
return Number(reversedNumber);
}
