const cities = ["Москва", "Санкт-Петербург", "Париж", "Хельсинки", "Нью-Йорк"];
const temperatures = [];
for (let i = 0; i < cities.length; i++) {
    let temp = prompt(`Введите температуру для города ${cities[i]}`);
    temperatures.push(Number(temp));
}
const temperatureTable = document.getElementById('temperatureTable');
for (let j = 0; j < cities.length; j++) {
    let row = document.createElement('tr');
    let cityCell = document.createElement('td');
    cityCell.textContent = cities[j];
    row.appendChild(cityCell);

    let tempCell = document.createElement('td');
    tempCell.textContent = temperatures[j] + ' °C';
    row.appendChild(tempCell);
    temperatureTable.appendChild(row);
}

let maxTemp = -Infinity;
let minTemp = Infinity;

for (i = 0; i < temperatures.length; i++) {
    if (temperatures[i] > maxTemp) {
        maxTemp =  temperatures[i];
    }
    if (temperatures[i] < minTemp) {
        minTemp = temperatures[i];
    }
}

let maxxTemp = document.getElementById('maxTemp');
maxxTemp.textContent = `Максимальная температура: ${maxTemp} °C`;
let minnTemp = document.getElementById('minTemp');
minnTemp.textContent = `Минимальная температура: ${minTemp} °C`;

