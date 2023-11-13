console.log("Hello from external JavaScript");

alert('Welcome to my Website!');

let userColor = prompt("What is your favorite color?");

alert(`Great! ${userColor} is my favorite color too!`);

let littleMermaidDaysRented = Number(prompt("How many days did you rent The Little Mermaid?"));
let brotherBearDaysRented = Number(prompt("How many days did you rent Brother Bear?"));
let herculesDaysRented = Number(prompt("How many days did you rent Hercules?"));
let rentalRate = prompt("How much per day to rent a movie?");
let totalRentalAmount = (littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented) * rentalRate;
alert(`You spent $${totalRentalAmount.toFixed(2)} on rental movies this week`);


let googleHoursWorked = Number(prompt("How many hours did you work for Google?"));
let facebookHoursWorked = Number(prompt("How many hours did you work for Facebook?"));
let amazonHoursWorked = Number(prompt("How many hours did you work for Amazon?"));
let googleHourlyRate = Number(prompt("What is the Google hourly rate?"));
let facebookHourlyRate = Number(prompt("What is the Facebook hourly rate?"));
let amazonHourlyRate = Number(prompt("What is the Amazon hourly rate?"));
let totalAmountPaid = googleHoursWorked * googleHourlyRate + facebookHoursWorked * facebookHourlyRate + amazonHoursWorked * amazonHourlyRate;

alert(`You were paid $${totalAmountPaid} this week, congrats!`);