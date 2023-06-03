//задание 5. Переписать консольное приложение через классы


class ElectricalDevices {
    constructor(name, manufacturer) {
        this.name = name;
        this.manufacturer = manufacturer;
    }

    getInfo() {
        return `The ${this.name} is manufacturied by ${this.manufacturer}.`
    }

    getPowerConsumption = function (power) {
        return `Power Consumption of the ${this.name} is ${power} W.`
    }

    getTurn = function (on_off) {
        return `The ${this.name} is switched ${on_off}.`
    }
}


class Lighting extends ElectricalDevices {
    constructor(name, manufacturer, typeOfLamp) {
        super(name);
        this.manufacturer = manufacturer
        this.typeOfLamp = typeOfLamp;
    }

    getPowerConsumption = function (power) {
        return `Electricity consumption of the ${this.name} is ${power} W.`
    }
}

class PersonalComputer extends ElectricalDevices {
    constructor(name, manufacturer, display) {
        super(name);
        this.manufacturer = manufacturer;
        this.display = display;
    }

    getTurn = function (on_off) {
        return `This ${this.name} is switched ${on_off}.`
    }

    getInfo() {
        return `The ${this.name} is manufacturied by ${this.manufacturer}. Display is ${this.display}'.`
    }
}


const smoothingIron = new ElectricalDevices("iron", "Tefal");

console.log(smoothingIron.getInfo());  // "The iron is manufacturied by Tefal."
console.log(smoothingIron.getPowerConsumption(650));  // "Power Consumption of the iron is 650 W."
console.log(smoothingIron.getTurn("on"));  // "The iron is switched on."
// console.log(smoothingIron)


const DeskLamp = new Lighting("lamp", "IKEA", "LED");

console.log(DeskLamp.getInfo());  // "The lamp is manufacturied by IKEA."
console.log(DeskLamp.getPowerConsumption(20));  // "Electricity consumption of the lamp is 20 W."
console.log(DeskLamp.getTurn("off"));  // "The lamp is switched off."


const computer = new PersonalComputer("computer", "Toshiba", 17);

console.log(computer.getInfo());  // "The computer is manufacturied by Toshiba. Display is 17'."
console.log(computer.getPowerConsumption(380));  // "Power Consumption of the computer is 380 W."
console.log(computer.getTurn("on"));  // "This computer is switched on."