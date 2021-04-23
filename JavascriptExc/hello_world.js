//Hello World: my first JavaScript program
const friendlyGreeting = "Hello";
const firstNumber = 23;
let secondNumber = 19;
const theAnswer = firstNumber + secondNumber;
console.log(friendlyGreeting + " "+"World");
console.log();
console.log("The answer is", theAnswer);
secondNumber = 100;
console.log();
console.log("The answer is still", theAnswer);
console.log("Even though the second number is now", secondNumber);
console.log(`The answer is ${theAnswer}! Isn't that wonderful?`);

function add(num1, num2){
    return num1 + num2;
}
const result = add(2,3);
console.log(result);
