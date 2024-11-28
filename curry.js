const curry = (a) => (b) => (c) => a + b + c;
const level = curry(5);

console.log(level(3)(4)); // 12
console.log(level(5)(5)); // 15
