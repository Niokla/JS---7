// задание 4.
//Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

// Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент).

// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

function ElectricalDevices(name, power, plugged) {
    this.name = name,
        this.power = power,
        this.pluggedIn = plugged
}


ElectricalDevices.prototype.plugIn = function () {
    if (this.pluggedIn === 'off') {
        this.pluggedIn = 'on';
        console.log(this.name + " is plugged in!")
    } else {
        this.pluggedIn = 'off';
        console.log(this.name + " is not plugged in!")
    }
}



KithenDevices.prototype = new ElectricalDevices();
GuestroomDevices.prototype = new ElectricalDevices();
BedroomDevices.prototype = new ElectricalDevices();



function KithenDevices(name, power, plugged) {
    this.location = 'kitchen',
        this.name = name,
        this.power = power,
        this.pluggedIn = plugged
}


function GuestroomDevices(brand, name, power, plugged) {
    this.location = 'guestroom',
        this.brand = brand,
        this.name = name,
        this.power = power,
        this.pluggedIn = plugged
}


function BedroomDevices(brand, name, power, plugged) {
    this.location = 'bedroom',
        this.brand = brand,
        this.name = name,
        this.power = power,
        this.pluggedIn = plugged
}


const tv = new GuestroomDevices('Samsung', 'TV', 50, 'on');
const kettle = new KithenDevices('kettle', 1000, 'off');
const lamp = new BedroomDevices('Xiaomi', 'lamp', 5, 'on');



// console.log(tv);
// console.log(lamp);
// console.log(kettle);
tv.plugIn(); //выключили из розетки
// tv.plugIn(); //включили в розетку
lamp.plugIn(); //выключили из розетки
lamp.plugIn(); //включили в розетку
kettle.plugIn(); //включили в розетку


function powerSum(arr) {
    let value = 0;
    arr.forEach((item) => {
        if (item.pluggedIn === 'on') {
            value += item.power
        }
    })
    console.log('Total power consumption of ' + value + ' watts');
}


powerSum([tv, lamp, kettle])

