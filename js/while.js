
let num = 2;

while (num <= 65536) {
    console.log(num);
    num *= 2;
}


let allCones = Math.floor(Math.random() * 51) + 50; // Random number between 50 and 100 inclusive

console.log(`Starting with ${allCones} ice cream cones to sell.`);

do {
    let conesBought = Math.floor(Math.random() * 5) + 1;

    if (conesBought <= allCones) {
        console.log(`${conesBought} cones sold...`);
        allCones -= conesBought;
    } else {
        console.log(`Cannot sell you ${conesBought} cones, I only have ${allCones}...`);
    }
} while (allCones > 0);

console.log("Yay! I sold them all!");
