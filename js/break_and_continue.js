
let userInput;
while (true) {
    userInput = prompt("Please enter an odd number between 1 and 50:");
    userInput = parseInt(userInput);
    if (userInput >= 1 && userInput <= 50 && userInput % 2 !== 0) {
        break;
    }
}

console.log("Number to skip is:", userInput);

console.log("Here are the odd numbers:");

for (let i = 1; i <= 50; i++) {
    if (i === userInput) {
        console.log("Yikes! Skipping number:", userInput);
        continue;
    }
    if (i % 2 !== 0) {
        console.log("Here is an odd number:", i);
    }
}
