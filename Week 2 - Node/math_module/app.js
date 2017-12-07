var math_module = require('./mathlib')();     //notice the extra invocation parentheses!
console.log(math_module);
math_module.add(2,3);
math_module.multiply(3,5);
math_module.square(5,2);
math_module.random(1,35);