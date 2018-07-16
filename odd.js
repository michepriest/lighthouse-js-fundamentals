function isEven(num) {
  return num % 2 === 0;
}
function isOdd(num) {
  return !isEven(num);
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));