//задание 1
// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

const person = function (a) {
    a = {
        Имя: 'Николай',
        Фамилия: 'Никифоров',
        Возраст: 30
    }

    for (let key in a) {
        console.log(key + ': ' + a[key]);
    }

}

person();


