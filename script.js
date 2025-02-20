let numbers = [];
for (let i = -10; i <= 10; i++) {
    numbers.push(i);
}

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        numbers.splice(i, 1);
        i--;
    }
}

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * numbers[i];
    
}

numbers.sort((a, b) => b - a);

console.log(numbers);