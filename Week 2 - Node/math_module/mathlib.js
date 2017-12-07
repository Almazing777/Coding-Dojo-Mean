module.exports = function (){
  return {
    add: function(num1, num2) { 
        console.log("the sum is: ",  num1+num2); 
    },
    multiply: function(num1, num2) {
        console.log("multiplication is equal to: ",  num1*num2);
    },
    square: function(num1, num2) {
        console.log("square of 5 is equal to: ", Math.pow(num1, num2));
    },
    random: function(num1, num2) {
        console.log("random number between 1 to 35: ", Math.floor(Math.random()*num2)+num1);
    },
  }
};