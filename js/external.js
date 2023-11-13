console.log("Hello from external JavaScript");
alert('Welcome to my Website!');
let userInput = prompt('User, what is your favorite color?');
console.log(`${userInput} is also my favorite color! How did you know?`);

const littleMermaidDays = prompt("Enter the number of days for The Little Mermaid rental:");
const brotherBearDays = prompt("Enter the number of days for Brother Bear rental:");
const herculesDays = prompt("Enter the number of days for Hercules rental:");
const movieRentalPricePerDay = prompt("Enter the price per day for movie rental:");
const totalRentalCost =
    littleMermaidDays * movieRentalPricePerDay +
    brotherBearDays * movieRentalPricePerDay +
    herculesDays * movieRentalPricePerDay;
alert("Total movie rental cost: $" + totalRentalCost);

const googleHourlyRate = prompt("Enter the hourly rate for Google:");
const amazonHourlyRate = prompt("Enter the hourly rate for Amazon:");
const facebookHourlyRate = prompt("Enter the hourly rate for Facebook:");

const googleHoursWorked = prompt("Enter the number of hours worked for Google:");
const amazonHoursWorked = prompt("Enter the number of hours worked for Amazon:");
const facebookHoursWorked = prompt("Enter the number of hours worked for Facebook:");

const totalPayment =
    googleHoursWorked * googleHourlyRate +
    amazonHoursWorked * amazonHourlyRate +
    facebookHoursWorked * facebookHourlyRate;

alert("Total payment for the week: $" + totalPayment);

