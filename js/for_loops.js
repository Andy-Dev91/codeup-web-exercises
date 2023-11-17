
function showMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        let result = number * i;
        console.log(`${number} x ${i} = ${result}`);
    }
}

for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
    if (randomNumber % 2 === 0) {
        console.log(`${randomNumber} is even`);
    } else {
        console.log(`${randomNumber} is odd`);
    }
}

for (let i = 1; i <= 9; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
        str += i;
    }
    console.log(str);
}

for (let i = 100; i >= 5; i -= 5) {
    console.log(i);
}
